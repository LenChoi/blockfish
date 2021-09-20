package com.project.blockfish.member.service.impl;

import com.project.blockfish.config.UserRole;
import com.project.blockfish.controller.FileController;
import com.project.blockfish.member.Member;
import com.project.blockfish.member.MemberRepository;
import com.project.blockfish.member.service.AuthService;
import com.project.blockfish.member.service.EmailService;
import com.project.blockfish.member.service.RedisUtil;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);
    private final MemberRepository memberRepository;
    private final RedisUtil redisUtil;
    private final EmailService emailService;

    @Override
    public void signUpUser(Member member) {
        System.out.println(member);
        existValidate(member.getUserId());
        String password = member.getPassword();
        //암호 해쉬화 하기
        member.setPassword(password);
        memberRepository.save(member);
    }
    private void existValidate(String userId){
        Member existMember = memberRepository.findByUserId(userId);
        if (existMember != null) {
            logger.debug(userId + " 는 이미 가입된 아이디 입니다.");
            throw new IllegalArgumentException("이미 가입된 아이디입니다.");
        }
    }

    @Override
    public Member loginUser(String id, String password) throws Exception {
        Member member = memberRepository.findByUserId(id);
        if (member == null) throw new Exception("멤버가 없습니다.");
        //password 해쉬화
        if (!member.getPassword().equals(password))
            throw new Exception("비밀번호가 틀립니다.");
        return member;
    }

    @Override
    public Member findByUserId(String userId) throws NotFoundException {
        Member member = memberRepository.findByUserId(userId);
        if (member == null) throw new NotFoundException("멤버가 조회되지 않음");
        return member;
    }

    @Override
    public void verifyEmail(String key) throws NotFoundException {
        String memberId = redisUtil.getData(key);
        Member member = memberRepository.findByUserId(memberId);
        if (member == null) throw new NotFoundException("멤버가 조회되지 않음");
        modifyUserRole(member, UserRole.ROLE_USER);
        redisUtil.deleteData(key);
    }

    @Override
    public void modifyUserRole(Member member, UserRole userRole) {
        member.setRole(userRole);
        memberRepository.save(member);
    }

    @Override
    public void sendVerificationMail(Member member) throws NotFoundException {
        String VERIFICATION_LINK = "http://18.118.194.242:8080/user/verify/";
        if (member == null) throw new NotFoundException("멤버가 조회되지 않음");
        UUID uuid = UUID.randomUUID();
        redisUtil.setDataExpire(uuid.toString(), member.getUserId(), 60 * 30L);
        emailService.sendMail(member.getEmail(), "회원가입 인증메일입니다.", VERIFICATION_LINK + uuid.toString());
    }

    @Override
    public void checkExpirationToken(String accessToken, String refreshToken) {
    }
}
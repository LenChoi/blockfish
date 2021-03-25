package com.project.blockfish.service.impl;

import com.project.blockfish.model.Member;
import com.project.blockfish.repository.MemberRepository;
import com.project.blockfish.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final MemberRepository memberRepository;

    @Override
    public void signUpUser(Member member) {
        System.out.println(member);
        String password = member.getPassword();
        //암호 해쉬화 하기
        member.setPassword(password);
        memberRepository.save(member);
    }

    @Override
    public Member loginUser(String id, String password) throws Exception {
        Member member = memberRepository.findByUserId(id);
        if(member == null) throw new Exception("멤버가 없습니다.");
        //password 해쉬화
        if(!member.getPassword().equals(password))
            throw new Exception ("비밀번호가 틀립니다.");
        return member;
    }
}
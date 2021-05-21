package com.project.blockfish.businesslogic.service;

import com.project.blockfish.businesslogic.domain.Member;
import com.project.blockfish.businesslogic.SecurityMember;
import com.project.blockfish.businesslogic.domain.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

        System.out.println("userId = " + userId);
        Member member = memberRepository.findByUserId(userId);
        if (member == null) {
            throw new UsernameNotFoundException(userId + " : 사용자 존재하지 않음");
        }
        return new SecurityMember(member);
    }
}

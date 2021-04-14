package com.project.blockfish.service;

import com.project.blockfish.config.UserRole;
import com.project.blockfish.model.Member;
import javassist.NotFoundException;

public interface AuthService {
    void signUpUser(Member membner);
    Member loginUser(String id, String password) throws Exception;
    Member findByUserId(String userid) throws NotFoundException;
    void verifyEmail(String key) throws NotFoundException;
    void sendVerificationMail(Member member) throws NotFoundException;
    void modifyUserRole(Member member, UserRole userRole);
    void checkExpirationToken(String accessToken, String refreshToken);
}

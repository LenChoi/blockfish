package com.project.blockfish.auth;

import com.project.blockfish.entity.Member;

public interface AuthService {
    void signUpUser(Member membner);

    Member loginUser(String id, String password) throws Exception;
}

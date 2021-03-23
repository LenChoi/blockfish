package com.project.blockfish.service;

import com.project.blockfish.model.Member;

public interface AuthService {
    void signUpUser(Member membner);

    Member loginUser(String id, String password) throws Exception;
}

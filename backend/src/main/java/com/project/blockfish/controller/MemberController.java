package com.project.blockfish.controller;

import com.project.blockfish.auth.AuthService;
import com.project.blockfish.entity.Member;
import com.project.blockfish.exception.Message;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MemberController {

    private final AuthService authService;

    @PostMapping("/signup")
    public String signUpUser() {
        return " success";
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }



}

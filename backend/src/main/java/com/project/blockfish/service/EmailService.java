package com.project.blockfish.service;

import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    public void sendMail(String to, String sub, String text);
}

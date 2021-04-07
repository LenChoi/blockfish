package com.project.blockfish.service;

import com.project.blockfish.model.Member;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    public void sendMail(String to, String sub, String text);
}

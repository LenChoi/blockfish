package com.project.blockfish.service;

import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    public void sendSimpleMessage(String to) throws Exception;
}

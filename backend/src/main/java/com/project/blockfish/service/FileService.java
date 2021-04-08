package com.project.blockfish.service;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@Service
public interface FileService {
    public String getHash(String path) throws IOException, NoSuchAlgorithmException;
}

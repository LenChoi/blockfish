package com.project.blockfish.businesslogic.service;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@Service
public interface FileService {
    String getHash(String path) throws IOException, NoSuchAlgorithmException;
}

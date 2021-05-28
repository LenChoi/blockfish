package com.project.blockfish.businesslogic.service;

import com.project.blockfish.businesslogic.domain.Files;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@Service
public interface FileService {
    String getHash(String path) throws IOException, NoSuchAlgorithmException;
    Files findByFileId(Long fileId) throws NotFoundException;
}

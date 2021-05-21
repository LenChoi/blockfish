package com.project.blockfish.businesslogic.service.impl;

import com.project.blockfish.businesslogic.service.FileService;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class FileServiceImpl implements FileService {
    @Override
    public String getHash(String path) throws IOException, NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        FileInputStream fileInputStream = new FileInputStream(path);
        byte[] dataBytes = new byte[1024];
        Integer nRead = 0;
        while ((nRead = fileInputStream.read(dataBytes)) != -1) {
            messageDigest.update(dataBytes, 0, nRead);
        }
        byte[] mdBytes = messageDigest.digest();
        StringBuffer stringBuffer = new StringBuffer();
        for (Integer i = 0; i < mdBytes.length; i++) {
            stringBuffer.append(Integer.toString((mdBytes[i] & 0xff) + 0x100, 16)).substring(1);
        }
        return stringBuffer.toString();
    }
}

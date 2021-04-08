package com.project.blockfish.controller;

import com.project.blockfish.service.FileService;
import com.project.blockfish.service.impl.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;
    private static final String UPLOAD_DIRECTORY = "/Users/minho/Downloads/upload/";


    @PostMapping("/upload")
    public String uploadSingle(@RequestParam("files") MultipartFile file) throws Exception {
        File targetFile = new File( UPLOAD_DIRECTORY + file.getOriginalFilename());
        try {
            InputStream fileStream = file.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);
        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);
            e.printStackTrace();
        }

        String filePath = UPLOAD_DIRECTORY + file.getOriginalFilename();
        String fileHash = fileService.getHash(filePath);

        return fileHash;
    }
}

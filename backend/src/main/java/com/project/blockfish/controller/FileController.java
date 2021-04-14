package com.project.blockfish.controller;

import com.project.blockfish.model.KlayDto;
import com.project.blockfish.service.FileService;
import com.project.blockfish.service.JwtUtil;
import com.project.blockfish.service.klay.KlayService;
import lombok.RequiredArgsConstructor;
import okhttp3.OkHttpClient;
import org.apache.commons.io.FileUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;
    private final KlayService klayService;
    private final JwtUtil jwtUtil;
    private static final String UPLOAD_DIRECTORY = "/Users/minho/Downloads/upload/";


    @PostMapping("/upload")
    public KlayDto uploadSingle(@RequestParam("files") MultipartFile file, @RequestHeader(value="accessToken") String accessToken,
                                @RequestHeader(value="refreshToken") String refreshToken) throws Exception {
        File targetFile = new File( UPLOAD_DIRECTORY + file.getOriginalFilename());
        String userId = jwtUtil.getUserId(accessToken);
        System.out.println("userId = " + userId);
        System.out.println("targetFile = " + targetFile);
        try {
            InputStream fileStream = file.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);
        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);
            e.printStackTrace();
        }
        System.out.println("upload test");
        String filePath = UPLOAD_DIRECTORY + file.getOriginalFilename();
        String fileHash = fileService.getHash(filePath);
        KlayDto klayDto = klayService.sendHashToKlay(fileHash, userId);

        return klayDto;
    }
}

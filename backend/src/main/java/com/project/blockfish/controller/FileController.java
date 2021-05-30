package com.project.blockfish.controller;

import com.project.blockfish.businesslogic.service.impl.FileUploadService;
import com.project.blockfish.domainmodel.KlayDto;
import com.project.blockfish.businesslogic.service.FileService;
import com.project.blockfish.businesslogic.service.JwtUtil;
import com.project.blockfish.businesslogic.service.klay.KlayService;
import com.project.blockfish.businesslogic.domain.Files;
import javassist.NotFoundException;
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
    private static final String UPLOAD_DIRECTORY = "http://sonjuhy.iptime.org/home/disk1/blockfish/uploads";

    private final FileService fileService;
    private final KlayService klayService;
    private final FileUploadService fileUploadService;
    private final JwtUtil jwtUtil;

    @PostMapping("/upload")
    public KlayDto uploadSingle(@RequestParam("files") MultipartFile file, @RequestHeader(value = "accessToken") String accessToken,
                                @RequestHeader(value = "refreshToken") String refreshToken) throws Exception {
        File targetFile = new File(UPLOAD_DIRECTORY + file.getOriginalFilename());
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
//    디비에서 파일을 아이디로 불러오기
    @GetMapping("/getFile")
    public String getFile(@RequestBody Long fileId) throws NotFoundException {
        Files file = fileService.findByFileId(fileId);
        System.out.println("file.getName() = " + file.getName());

        return file.getName();
    }
//    파일이 업로드 되는지 테스트
    @PostMapping("/uploadTest")
    public String uploadTest(@RequestParam("files") MultipartFile file) {
        String uploadUrl =  fileUploadService.restore(file);
        System.out.println("uploadUrl = " + uploadUrl);
        return uploadUrl;
    }
}
package com.project.blockfish.controller;

import com.project.blockfish.service.FileService;
import com.project.blockfish.service.icon.IconBlockchain;
import foundation.icon.icx.*;
import foundation.icon.icx.crypto.KeystoreException;
import foundation.icon.icx.transport.http.HttpProvider;
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

    @GetMapping("/test")
    public String test() throws IOException, KeystoreException {
        System.out.println("1");
        OkHttpClient okHttpClient = new OkHttpClient.Builder()
                .readTimeout(200, TimeUnit.MILLISECONDS)
                .writeTimeout(600, TimeUnit.MILLISECONDS)
                .build();
        System.out.println("2");
        IconService iconService = new IconService(new HttpProvider(okHttpClient, "http://localhost:8080", 3));
        System.out.println("3");
        IconBlockchain iconBlockchain = new IconBlockchain();
        //iconBlockchain.createWallet("abc123");

        File file = new File("/Users/minho/Downloads/upload/UTC--2021-04-09T11-49-37.755--hx37853cdf2939845dbe920c32a2f61ef1513ab45f.json");
        System.out.println("4");
        Wallet wallet = KeyWallet.load("abc123", file);
        System.out.println("address:" + wallet.getAddress()); // Address Check
        System.out.println("5");
        BigInteger balance = iconService.getBalance(wallet.getAddress()).execute();
        System.out.println("balance:" + balance);
        return "success";
    }
}

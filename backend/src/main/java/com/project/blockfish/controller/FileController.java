package com.project.blockfish.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.project.blockfish.response.Response;
import com.project.blockfish.file.SFTPSender;
import com.project.blockfish.file.service.SearchService;
import com.project.blockfish.dto.FileUploadDto;
import com.project.blockfish.dto.KlayDto;
import com.project.blockfish.file.service.FileInformationService;
import com.project.blockfish.member.service.JwtUtil;
import com.project.blockfish.file.service.klay.KlayService;

import com.project.blockfish.dto.SearchedFileDto;
import com.project.blockfish.file.FileInformation;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;

import static com.project.blockfish.file.service.impl.FileInformationServiceImpl.UPLOAD_DIRECTORY2;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    private static final String UPLOAD_DIRECTORY = "http://sonjuhy.iptime.org/home/disk1/blockfish/uploads/";

    private final FileInformationService fileInformationService;
    private final KlayService klayService;
    private final JwtUtil jwtUtil;
    private final SFTPSender sftpSender;
    private final SearchService searchService;

    @PostMapping("/upload")
    public KlayDto uploadSingle(@RequestParam("files") MultipartFile file, @RequestHeader(value = "accessToken") String accessToken,
                                @RequestHeader(value = "refreshToken") String refreshToken) throws Exception {
        sftpSender.sftpConnect();

        File targetFile = new File(UPLOAD_DIRECTORY2 + file.getOriginalFilename());
        //acToken에서 아이디 값 가져오기
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

        String fileHash = sftpSender.getHash(file.getOriginalFilename());
        KlayDto klayDto = klayService.sendHashToKlay(fileHash, userId);

        sftpSender.sftpDisconnect();

        return klayDto;
    }

    //    디비에서 파일 이름을 아이디로 불러오기
    @GetMapping("/getFile")
    public String getFile(@RequestBody Long fileId) throws NotFoundException {
        FileInformation file = fileInformationService.findByFileId(fileId);
        System.out.println("file.getName() = " + file.getName());

        return file.getName();
    }

    // 서버에 파일및 로컬에 이미지가 업로드 되는지 테스트
    @PostMapping("/uploadTest")
    public Response uploadTest(@RequestParam("files") MultipartFile file,
                                        @RequestParam("image") MultipartFile imageFile,
                                        @RequestParam(value = "fileUploadDto") String fileUploadString) throws IOException {
        Response response = new Response();

        String absolutePath = System.getProperty("user.dir");
        String imagePath = absolutePath + "/backend/src/main/resources/image/" + imageFile.getOriginalFilename();
        File targetFile = new File(imagePath);

        try {
            logger.debug("uploadFileImageTest API 시작");
            //image 파일을 로컬 루트에 저장
            InputStream imageFileInputStream = imageFile.getInputStream();
            FileUtils.copyInputStreamToFile(imageFileInputStream, targetFile);
            //실제 파일을 파일 서버에 업로드
            sftpSender.sftpConnect();
            sftpSender.upload(file);
            String fileHash = sftpSender.getHash(file.getOriginalFilename());
//            System.out.println("업로드 fileHash = " + fileHash);
            KlayDto klayDto = klayService.sendHashToKlay(fileHash, "userId");

            FileUploadDto fileUploadDto = new ObjectMapper().readValue(fileUploadString, FileUploadDto.class);
            fileUploadDto.setName(file.getOriginalFilename());
            fileUploadDto.setImageAddress(imagePath);
            fileInformationService.saveFileInfo(fileUploadDto, klayDto);
            sftpSender.sftpDisconnect();

            response.setResponse("success");
            response.setMessage("파일 업로드가 성공적으로 완료했습니다.");
            System.out.println("파일이 저장된 위치/ 파일명 = " + UPLOAD_DIRECTORY2 + file.getOriginalFilename());
            logger.debug("파일이 저장된 위치/ 파일명 = " + UPLOAD_DIRECTORY2 + file.getOriginalFilename());
        } catch (Exception e) {
            logger.debug("uploadTest API 실행중 오류가 발생했습니다.");
            FileUtils.deleteQuietly(targetFile);
            e.printStackTrace();

            response.setResponse("fail");
            response.setMessage("파일 업로드 중 오류가 발생했습니다.");
            response.setData(e.toString());
        }

        return response;
    }

    @PostMapping("/downloadTest")
    public File downloadTest(@RequestParam("fileName") String fileName) {
        sftpSender.sftpConnect();

        System.out.println("hash = " + sftpSender.getHash(fileName));
        File file = sftpSender.download(fileName);

        sftpSender.sftpDisconnect();

        return file;
    }

    //    로컬에 파일이 업로드 되는지 테스트
    @PostMapping("/uploadLocalTest")
    public Response uploadLocalTest(@RequestParam(value = "files") MultipartFile file,
                                    @RequestParam(value = "fileUploadDto") String fileUploadString) throws IOException {
        System.out.println("----upload test-----");

        String absolutePath = System.getProperty("user.dir");
        String savedPath = absolutePath + "/backend/src/main/java/testuploads/" + file.getOriginalFilename();

        File targetFile = new File(savedPath);
        System.out.println("targetFile = " + targetFile);

        try {
            InputStream fileStream = file.getInputStream();
            FileUtils.copyInputStreamToFile(fileStream, targetFile);
        } catch (IOException e) {
            FileUtils.deleteQuietly(targetFile);
            e.printStackTrace();
        }
        // klayDto생성
        System.out.println("klay test");
        String fileHash = sftpSender.getHash(file.getOriginalFilename());
        KlayDto klayDto = klayService.sendHashToKlay(fileHash, "test");

        FileUploadDto fileUploadDto = new ObjectMapper().readValue(fileUploadString, FileUploadDto.class);
        fileUploadDto.setName(file.getOriginalFilename());

        Response response = new Response();

        try {
            fileInformationService.saveFileInfo(fileUploadDto, klayDto);
            response.setResponse("success");
            response.setMessage("파일 업로드가 성공적으로 완료했습니다.");
        } catch (Exception e) {
            response.setResponse("fail");
            response.setMessage("파일 업로드 중 오류가 발생했습니다.");
            response.setData(e.toString());
        }

        System.out.println("파일이 저장된 위치/ 파일명 = " + savedPath);

        return response;
    }

    // 모든 파일정보 검색 하기
    @GetMapping("/searchAll")
    public ResponseEntity searchAllFileInfo(final Pageable pageable) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchAll(pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    // Os로 파일 검색하기
    @GetMapping("/searchByOs")
    public ResponseEntity searchFileInfoByOs(final Pageable pageable,
                                             @RequestBody String osType) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByOs(osType, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    // Keyword로 파일 검색하기
    @GetMapping("/searchByKeyword")
    public ResponseEntity searchFileInfoByKeyword(final Pageable pageable,
                                                  @RequestBody String keyword) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByKeyWord(keyword, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    // category로 파일 검색하기
    @GetMapping("/searchByCategory")
    public ResponseEntity searchFileInfoByCategory(final Pageable pageable,
                                                   @RequestBody String osType,
                                                   @RequestBody String category) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByCategory(osType, category, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }
}
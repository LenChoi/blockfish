package com.project.blockfish.controller;

import com.project.blockfish.dto.SearchedFileDto;
import com.project.blockfish.file.FileInformation;
import com.project.blockfish.file.FileInformationRepository;
import com.project.blockfish.file.service.SearchService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static com.project.blockfish.file.Category.findCodeByName;
import static com.project.blockfish.file.Category.findNameByCode;

@RestController
@RequestMapping("search")
@RequiredArgsConstructor
public class SearchController {

    private final SearchService searchService;
    private final FileInformationRepository fileInformationRepository;

    @GetMapping("/all")
    @ApiOperation(value = "개선 이전 전체 검색", notes = "모든 파일을 검색")
    public ResponseEntity searchAllFileInfo(final Pageable pageable) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchAll(pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    @GetMapping("/byOs")
    @ApiOperation(value = "개선 이전 OS로 검색", notes = "해당 OS의 모든 파일 검색, orderType = {Date, Rank, null}중 1개")
    public ResponseEntity searchFileInfoByOs(final Pageable pageable,
                                             @RequestParam(value = "osType") String osType,
                                             @RequestParam(value = "orderType") String orderType) {
        if (orderType.equals("Date")) {
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOsByDate(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        } else if (orderType.equals("Rank")) {
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOsByRank(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        } else {
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOs(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        }
    }

    @GetMapping("/byKeyword")
    @ApiOperation(value = "개선 이전 키워드로 검색", notes = "본문과 파일명에 해당 키워드가 포함된 모든 파일을 검색")
    public ResponseEntity searchFileInfoByKeyword(final Pageable pageable,
                                                  @RequestParam(value = "keyword") String keyword) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByKeyWord(keyword, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    @GetMapping("/byCategory")
    @ApiOperation(value = "개선 이전 카테고리로 검색"
            , notes = "특정 OS의 특정 카테고리의 파일 검색(category - PC 관리/보안,백신,파일 압축,시스템 관리,동영상,동영상 녹화,동영상 플레이어,동영상 편집,동영상 코덱,인터넷/네트워크,브라우저,메신저,파일 전송,문서/사무,문서 뷰어,문서 편집,기타")
    public ResponseEntity searchFileInfoByCategory(final Pageable pageable,
                                                   @RequestParam(value = "osType") String osType,
                                                   @RequestParam(value = "category") String category) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByCategory(osType, category, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    @GetMapping("/detail")
    @ApiOperation(value = "개선 이전 상세조회", notes = "파일아이디가 키값")
    public ResponseEntity SelectOneFileInfo(@RequestParam(value = "fileId") String fileId) {
        FileInformation SelectOneFileInfo = searchService.SelectOneFileInfo(fileId);
        return new ResponseEntity<>(SelectOneFileInfo, HttpStatus.OK);
    }

    @GetMapping()
    @ApiOperation(value = "전체 검색", notes = "모든 파일을 검색")
    public ResponseEntity searchAll(final Pageable pageable) {
        Page<FileInformation> fileInformations = fileInformationRepository.findAll(pageable);

        return new ResponseEntity<>(fileInformations, HttpStatus.OK);
    }

    @GetMapping("/{fileId}}")
    @ApiOperation(value = "상세조회", notes = "파일아이디가 키값")
    public ResponseEntity findById(@PathVariable(value = "fileId") Long fileId) {
        Optional<FileInformation> fileInformation = fileInformationRepository.findById(fileId);

        if (fileInformation.isPresent()) {
            return new ResponseEntity<>(fileInformation, HttpStatus.OK);
        }
        return new ResponseEntity<>(fileInformation, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/byOs/{orderType}")
    @ApiOperation(value = "OS로 검색", notes = "해당 OS의 모든 파일 검색, orderType = {Date, Rank, null}중 1개")
    public ResponseEntity searchByOs(final Pageable pageable,
                                             @RequestParam(value = "osType") String osType,
                                             @PathVariable(value = "orderType", required = false) String orderType) {
        if (orderType.equals(null)) {
            Page<FileInformation> searchedFiles = fileInformationRepository.findByOsType(osType, pageable);

            return new ResponseEntity<>(searchedFiles, HttpStatus.OK);
        } else{
            Page<FileInformation> searchedFiles = fileInformationRepository.findByOsType(osType, PageRequest.of(0,10, Sort.Direction.ASC,orderType));

            return new ResponseEntity<>(searchedFiles, HttpStatus.OK);
        }
    }

    @GetMapping("/keyword")
    @ApiOperation(value = "키워드로 검색", notes = "본문과 파일명에 해당 키워드가 포함된 모든 파일을 검색")
    public ResponseEntity searchByKeyword(final Pageable pageable,
                                                  @RequestParam(value = "keyword") String keyword) {
        Page<FileInformation> searchedFiles = fileInformationRepository.findByKeyword(keyword, pageable);

        return new ResponseEntity<>(searchedFiles, HttpStatus.OK);
    }

    @GetMapping("/category")
    @ApiOperation(value = "카테고리로 검색"
            , notes = "특정 OS의 특정 카테고리의 파일 검색(category - PC 관리/보안,백신,파일 압축,시스템 관리,동영상,동영상 녹화,동영상 플레이어,동영상 편집,동영상 코덱,인터넷/네트워크,브라우저,메신저,파일 전송,문서/사무,문서 뷰어,문서 편집,기타")
    public ResponseEntity searchByCategory(final Pageable pageable,
                                                   @RequestParam(value = "osType") String osType,
                                                   @RequestParam(value = "category") String category) {
        Page<FileInformation> searchedFiles = fileInformationRepository.findByOsTypeAndCategoryCode(osType, findCodeByName(category), pageable);

        return new ResponseEntity<>(searchedFiles, HttpStatus.OK);
    }
}

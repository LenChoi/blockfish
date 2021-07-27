package com.project.blockfish.controller;

import com.project.blockfish.dto.SearchedFileDto;
import com.project.blockfish.file.service.SearchService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("search")
@RequiredArgsConstructor
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/all")
    @ApiOperation(value = "전체 검색", notes = "모든 파일을 검색")
    public ResponseEntity searchAllFileInfo(final Pageable pageable) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchAll(pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    @GetMapping("/byOs")
    @ApiOperation(value = "OS로 검색", notes = "해당 OS의 모든 파일 검색, orderType = {Date, Rank, null}중 1개")
    public ResponseEntity searchFileInfoByOs(final Pageable pageable,
                                             @RequestParam(value = "osType") String osType,
                                             @RequestParam(value = "orderType") String orderType) {
        if (orderType.equals("Date")) {
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOsByDate(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        } else if (orderType.equals("Rank")) {
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOsByRank(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        } else{
            Page<SearchedFileDto> searchedFileDtos = searchService.searchByOs(osType, pageable);

            return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
        }
    }

    @GetMapping("/byKeyword")
    @ApiOperation(value = "키워드로 검색", notes = "본문과 파일명에 해당 키워드가 포함된 모든 파일을 검색")
    public ResponseEntity searchFileInfoByKeyword(final Pageable pageable,
                                                  @RequestParam(value = "keyword") String keyword) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByKeyWord(keyword, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }

    @GetMapping("/byCategory")
    @ApiOperation(value = "카테고리로 검색", notes = "특정 OS의 특정 카테고리의 파일 검색")
    public ResponseEntity searchFileInfoByCategory(final Pageable pageable,
                                                   @RequestParam(value = "osType") String osType,
                                                   @RequestParam(value = "category") String category) {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByCategory(osType, category, pageable);

        return new ResponseEntity<>(searchedFileDtos, HttpStatus.OK);
    }
}

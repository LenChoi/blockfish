package com.project.blockfish.file.service.impl;

import com.project.blockfish.file.Category;
import com.project.blockfish.file.FileInformation;
import com.project.blockfish.file.FileInformationRepository;
import com.project.blockfish.dto.SearchedFileDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertAll;


@SpringBootTest
//@ExtendWith(MockitoExtension.class)
//@ExtendWith(SpringExtension.class)
@Transactional
public class SearchServiceImplTest {
    @Autowired
    private FileInformationRepository fileInformationRepository;

    @Autowired
    private SearchServiceImpl searchService;

    private final static Pageable pageRequest = PageRequest.of(0, 10);
    private final long beforeSearchAllCount = searchService.searchAll(pageRequest).stream().count();
    private final long beforeSearchOsCount = searchService.searchByOs("MAC", pageRequest).stream().count();
    private final long beforeSearchKeywordCount = searchService.searchByKeyWord("비디오", pageRequest).stream().count();
    private final long beforeSearchCategoryCount = searchService.searchByCategory("WINDOW", Category.findCodeByName("백신"), pageRequest).stream().count();

    @BeforeEach
    void repositorySetup() {
        String name = "테스트 파일";
        String imageAddress = "imageAddress";
        String fileAddress = "테스트주소";
        String info = "임시 파일 정보";
        int downCount = 0;
        String blockChainAddress = "0xAxabcx3ctest";
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime createAt = LocalDateTime.of(now.getYear(),
                now.getMonth(), now.getDayOfMonth(), now.getHour(), now.getMinute(), 0);
        String osType = "MAC";
        String windowOsType = "WINDOW";

        String etcCategoryCode = Category.findCodeByName("기타");
        String vaccineCategoryCode = Category.findCodeByName("백신");
        String videoCategoryCode = Category.findCodeByName("동영상");

        //9개 저장
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, osType, etcCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, osType, etcCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation("블록피쉬 비디오 플레이어", imageAddress, fileAddress, info, osType, videoCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, windowOsType, etcCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, windowOsType, etcCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, windowOsType, vaccineCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, info, windowOsType, vaccineCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, "여러가지 비디오들을 볼 수있는 프로그램", windowOsType, videoCategoryCode, downCount, blockChainAddress, createAt));
        fileInformationRepository.save(new FileInformation(name, imageAddress, fileAddress, "비디오 관련 파일입니다.", windowOsType, videoCategoryCode, downCount, blockChainAddress, createAt));
    }

    @DisplayName("모든 파일들 불러오기")
    @Test
    void searchAll() {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchAll(pageRequest);

        assertThat(searchedFileDtos.stream().count()).isEqualTo(beforeSearchAllCount+9);
    }

    @DisplayName("MacOS로 검색한 결과 가져오기")
    @Test
    void searchByOs() {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByOs("MAC", pageRequest);

        assertAll(
                () -> assertThat(searchedFileDtos.stream().count()).isEqualTo(beforeSearchOsCount + 3),
                () -> assertThat(searchedFileDtos.stream().filter(dto -> dto.getOsType().equals("MAC")).count()).isEqualTo(beforeSearchOsCount + 3)
        );
    }

    @DisplayName("비디오 키워드로 검색한 결과 가져오기")
    @Test
    void searchByKeyWord() {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByKeyWord("비디오", pageRequest);

        assertAll(
                () -> assertThat(searchedFileDtos.stream().count()).isEqualTo(beforeSearchKeywordCount + 3),
                () -> assertThat(searchedFileDtos.stream()
                        .filter(dto -> dto.getInfo().contains("비디오"))
                        .count()
                        + searchedFileDtos.stream()
                        .filter(dto -> dto.getName().contains("비디오"))
                        .count())
                        .isEqualTo(beforeSearchKeywordCount + 3)
        );
    }

    @DisplayName("WindowOS + 백신 카테고리로 검색한 결과 가져오기")
    @Test
    void searchByCategory() {
        Page<SearchedFileDto> searchedFileDtos = searchService.searchByCategory("WINDOW", Category.findCodeByName("백신"), pageRequest);

        assertAll(
                () -> assertThat(searchedFileDtos.stream().count()).isEqualTo(beforeSearchCategoryCount + 2),
                () -> assertThat(searchedFileDtos.stream()
                        .filter(dto -> dto.getOsType().equals("WINDOW"))
                        .filter(dto -> dto.getCategoryName().equals("백신"))
                        .count())
                        .isEqualTo(beforeSearchCategoryCount + 2)
        );
    }
}

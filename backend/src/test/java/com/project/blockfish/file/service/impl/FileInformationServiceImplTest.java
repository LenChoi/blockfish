package com.project.blockfish.file.service.impl;

import com.project.blockfish.dto.AddStarRankResponse;
import com.project.blockfish.file.Category;
import com.project.blockfish.file.FileInformation;
import com.project.blockfish.file.FileInformationRepository;
import com.project.blockfish.file.service.FileInformationService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FileInformationServiceImplTest {

    @Mock
    FileInformationRepository fileInformationRepository;
    FileInformationService fileInformationService = mock(FileInformationServiceImpl.class);

    @Test
    @Transactional
    public void 별점_주기() {
        String categoryCode = Category.findCodeByName("기타");
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime createAt = LocalDateTime.of(now.getYear(),
                now.getMonth(), now.getDayOfMonth(), now.getHour(), now.getMinute(), 0);

        AddStarRankResponse addStarRankResponse = new AddStarRankResponse();
        addStarRankResponse.setStarRank(new FileInformation("테스트 파일", "imageAddress", "테스트주소", "임시 파일 정보", "MAC",
                categoryCode, 0, "0xAxabcx3ctest", 0, 0, 0, createAt).addStarRank(5));

        when(fileInformationService.addStarRank(0L,5))
                .thenReturn(addStarRankResponse);

        AddStarRankResponse afterAddStarRank = fileInformationService.addStarRank(0L, 5);

        assertAll(
                () -> assertThat(afterAddStarRank.getStarRank()).isEqualTo(5)
        );
    }
}

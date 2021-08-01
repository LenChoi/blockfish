package com.project.blockfish.file;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import org.mockito.junit.jupiter.MockitoExtension;

import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

//@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FileInformationRepositoryTest {

    //mock 파일로 세이브하면 지정된 file 나오게
    @Mock
    FileInformationRepository fileInformationRepository;

    @Test
    @Transactional
    public void 파일저장_불러오기() {
        String name = "테스트 파일";
        String imageAddress = "imageAddress";
        String fileAddress = "테스트주소";
        String info = "임시 파일 정보";
        String osType = "MAC";
        String categoryCode = Category.findCodeByName("기타");
        int downCount = 0;
        String blockChainAddress = "0xAxabcx3ctest";
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime createAt = LocalDateTime.of(now.getYear(),
                now.getMonth(), now.getDayOfMonth(), now.getHour(), now.getMinute(), 0);

        FileInformation file = new FileInformation(name, imageAddress, fileAddress, info, osType, categoryCode,
                downCount, blockChainAddress,0,0,0, createAt);
        FileInformation newFileInformation;

        // mock으로 생성된 Repository에 save 실행시 하드코딩된 객체 리턴
        when(fileInformationRepository.save(file))
                .thenReturn(new FileInformation("테스트 파일","imageAddress","테스트주소","임시 파일 정보","MAC",categoryCode,
                        0,"0xAxabcx3ctest",0,0,0,createAt));

        newFileInformation = fileInformationRepository.save(file);
        // save가 정상적으로 1회 호출 되었는지 검증하기
        verify(fileInformationRepository, times(1)).save(file);
        assertThat(newFileInformation.getName()).isEqualTo("테스트 파일");
    }
}

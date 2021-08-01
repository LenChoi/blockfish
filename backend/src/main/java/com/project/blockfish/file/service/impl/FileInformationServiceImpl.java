package com.project.blockfish.file.service.impl;

import com.project.blockfish.dto.AddStarRankResponse;
import com.project.blockfish.dto.FileUploadDto;
import com.project.blockfish.dto.KlayDto;
import com.project.blockfish.file.Category;
import com.project.blockfish.file.FileInformation;
import com.project.blockfish.file.FileInformationRepository;
import com.project.blockfish.file.service.FileInformationService;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static com.project.blockfish.file.Category.findNameByCode;

@Service
@RequiredArgsConstructor
@Transactional
public class FileInformationServiceImpl implements FileInformationService {
    public static final String UPLOAD_DIRECTORY2 = "sonjuhy.iptime.org/websites/ssl/www/blockfish/uploads/";
    private final FileInformationRepository fileInformationRepository;

    @Override
    public void saveFileInfo(FileUploadDto fileUploadDto, KlayDto klayDto) {
        // LocalDateTime 생성
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime ldt = LocalDateTime.of(now.getYear(),
                now.getMonth(), now.getDayOfMonth(), now.getHour(), now.getMinute(), 0);

        FileInformation fileInformation = new FileInformation(
                fileUploadDto.getName(),
                fileUploadDto.getImageAddress(),
                UPLOAD_DIRECTORY2 + fileUploadDto.getName(),
                fileUploadDto.getInfo(),
                fileUploadDto.getOsType(),
                Category.findCodeByName(fileUploadDto.getCategoryName()),
                0,
//                클레이튼 컨트랙트 생성시 발생하는 가스 비용때문에 임시 주소 입력
                //                "클레이튼 임시주소",
                klayDto.getContractAddress(),
                0,
                0,
                0,
                ldt);

        System.out.println("files = " + fileInformation);
        fileInformationRepository.save(fileInformation);
    }

    @Override
    public FileInformation findByFileId(Long fileId) throws NotFoundException {
        FileInformation file = fileInformationRepository.getOne(fileId);
        if (file == null) throw new NotFoundException("파일이 존재 하지않음");
        return file;
    }

    @Override
    public AddStarRankResponse addStarRank(Long fileId, int starRank) {

        AddStarRankResponse addStarRankResponse = new AddStarRankResponse();
        try {
            FileInformation fileInformation = findByFileId(fileId);
            fileInformation.addStarRank(starRank);

            addStarRankResponse.setId(fileInformation.getId());
            addStarRankResponse.setName(fileInformation.getName());
            addStarRankResponse.setImageAddress(fileInformation.getImageAddress());
            addStarRankResponse.setInfo(fileInformation.getInfo());
            addStarRankResponse.setOsType(fileInformation.getOsType());
            addStarRankResponse.setDownCount(fileInformation.getDownCount());
            addStarRankResponse.setStarRank(fileInformation.getStarRankAverage());
            addStarRankResponse.setCategoryName(findNameByCode(fileInformation.getCategoryCode()));
            addStarRankResponse.setComments(fileInformation.getComments());
        } catch (NotFoundException e) {
            e.printStackTrace();
        }

        return addStarRankResponse;
    }

    @Override
    public void addDownCount(Long fileId) {
        try {
            FileInformation fileInformation = findByFileId(fileId);
            fileInformation.addDownCount();
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
    }
}

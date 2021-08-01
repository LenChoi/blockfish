package com.project.blockfish.file.service;

import com.project.blockfish.dto.AddStarRankResponse;
import com.project.blockfish.dto.FileUploadDto;
import com.project.blockfish.dto.KlayDto;
import com.project.blockfish.file.FileInformation;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

@Service
public interface FileInformationService {
    void saveFileInfo(FileUploadDto fileUploadDto, KlayDto klayDto);
    FileInformation findByFileId(Long fileId) throws NotFoundException;
    AddStarRankResponse addStarRank(Long fileId, int starRank);
    void addDownCount(Long fileId);
}

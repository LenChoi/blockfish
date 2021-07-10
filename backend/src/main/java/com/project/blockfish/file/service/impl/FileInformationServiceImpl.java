package com.project.blockfish.file.service.impl;

import com.project.blockfish.file.FileInformation;
import com.project.blockfish.file.FileInformationRepository;
import com.project.blockfish.file.service.FileInformationService;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FileInformationServiceImpl implements FileInformationService {
    private final FileInformationRepository fileInformationRepository;

    @Override
    public void saveFileInfo(FileInformation fileInformation) {
        System.out.println("files = " + fileInformation);
        fileInformationRepository.save(fileInformation);
    }

    @Override
    public FileInformation findByFileId(Long fileId) throws NotFoundException {
        FileInformation file = fileInformationRepository.getOne(fileId);
        if (file == null) throw new NotFoundException("파일이 존재 하지않음");
        return file;
    }
}
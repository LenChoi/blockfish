package com.project.blockfish.file.service;

import com.project.blockfish.dto.SearchedFileDto;
import com.project.blockfish.file.FileInformation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SearchService {
    Page<SearchedFileDto> searchAll(Pageable pageable);

    Page<SearchedFileDto> searchByOs(String osType, Pageable pageable);

    Page<SearchedFileDto> searchByOsByDate(String osType, Pageable pageable);

    Page<SearchedFileDto> searchByOsByRank(String osType, Pageable pageable);

    Page<SearchedFileDto> searchByKeyWord(String keyWard, Pageable pageable);

    Page<SearchedFileDto> searchByCategory(String osType, String category, Pageable pageable);

    FileInformation SelectOneFileInfo(String file_id);
}

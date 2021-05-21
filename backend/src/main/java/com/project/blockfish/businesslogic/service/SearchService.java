package com.project.blockfish.businesslogic.service;

import com.project.blockfish.domainmodel.SearchedFileDto;

import java.util.List;

public interface SearchService {
    List<SearchedFileDto> search();
}

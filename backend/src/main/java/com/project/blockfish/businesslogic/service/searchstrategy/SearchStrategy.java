package com.project.blockfish.businesslogic.service.searchstrategy;

import com.project.blockfish.businesslogic.domain.FileInformation;

import java.util.List;

public interface SearchStrategy {
    //search를 호출시 SearchedFileDao 에서 파일 리스트를 반환한다.
    List<FileInformation> search(String searchType);
}

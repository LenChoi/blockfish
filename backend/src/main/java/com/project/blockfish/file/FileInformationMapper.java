package com.project.blockfish.file;

import com.project.blockfish.dto.AddStarRankResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

// MapStruct Code Generator가 해당 인터페이스의 구현체를 생성해줌(componentModel = "spring" : spring에 맞게 bean으로 등록)
@Mapper(componentModel = "spring")
public interface FileInformationMapper{
//    해당Instance가 FileInformationMapper 상속받아서 FileInformationMapperImpl로 구현됨
//   아래에 만든 FileInformationMapper를 기반으로 메서드와 실제 로직들이 자동 생성될 수 있게 명시하는 것
   /* FileInformationMapper INSTANCE = Mappers.getMapper(FileInformationMapper.class);


    AddStarRankResponse fileInformationToStarRankResponse(FileInformation fileInformation);*/
}
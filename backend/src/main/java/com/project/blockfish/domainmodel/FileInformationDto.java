package com.project.blockfish.domainmodel;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class FileInformationDto {
    private String name;
    private String imageAddress;
    private String info;
    private String osType;
    //List<Comment> comments
    //List<Category> category;

    public String getName() {
        return name;
    }

    public String getImageAddress() {
        return imageAddress;
    }

    public String getInfo() {
        return info;
    }

    public String getOsType() {
        return osType;
    }
}

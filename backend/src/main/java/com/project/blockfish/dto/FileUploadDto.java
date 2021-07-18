package com.project.blockfish.dto;

public class FileUploadDto {
    private String name;
    //Can blank
    private String imageAddress;
    private String info;
    private String osType;
    private String categoryName;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageAddress() {
        return imageAddress;
    }

    public void setImageAddress(String imageAddress) {
        this.imageAddress = imageAddress;
    }

    public String getInfo() {
        return info;
    }

    public String getOsType() {
        return osType;
    }

    public String getCategoryName() {
        return categoryName;
    }
}

package com.project.blockfish.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;

    private String name;

    @OneToMany(mappedBy ="fileInfo")
    private List<FileInfo> fileInfos = new ArrayList<>();

//    private List<files> files = new ArrayList<>(); files : List 형태인데 이해가 안감
}
package com.project.blockfish.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class FileInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FILEINFO_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "FILE_ID")
    private File file;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @OneToMany(mappedBy = "os")
    private List<Os> osList = new ArrayList<>();

}

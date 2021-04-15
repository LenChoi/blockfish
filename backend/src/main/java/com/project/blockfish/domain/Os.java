package com.project.blockfish.domain;

import javax.persistence.*;

@Entity
public class Os {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OS_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "FILEINFO_ID")
    private FileInfo fileInfo;

    private String osType;

    private String filePath;


}

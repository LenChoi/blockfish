package com.project.blockfish.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.tomcat.jni.FileInfo;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "files")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private Long id;

    @NotBlank
    private String name;

    private String imageAddress;

    @NotBlank
    private String fileAddress;

    @NotBlank
    private String info;

    @NotBlank
    private String osType;

    @NotBlank
    private int downCount;

    @NotBlank
    private String blockChainAddress;

    private int StarRank;

    //List<Comment> comments

    //List<Category> category;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;

    private Boolean fileLock = false;
}

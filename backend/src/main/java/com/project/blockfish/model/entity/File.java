package com.project.blockfish.model.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@Entity
@Table(name = "Files")
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

//    private ? image
    @NotBlank
    private String info;

    private List<FileInfo> fileInfos = new ArrayList<>();

    private int count;

    private String blockChainAddress;

    private List<Comment> comments = new ArrayList<>();

    private Boolean lock;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createAt;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateAt;


}

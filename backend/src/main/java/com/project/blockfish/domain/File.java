package com.project.blockfish.domain;

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
    @Column(name = "FILE_ID")
    private Long id;

    @NotBlank
    private String name;

//    private ? image
    @NotBlank
    private String info;

    @OneToMany(mappedBy = "fileInfo")
    private List<FileInfo> fileInfos = new ArrayList<>();

    private int count;

    private String blockChainAddress;

    @OneToMany(mappedBy = "comment")
    private List<Comment> comments = new ArrayList<>();

    private Boolean lock;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createAt;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateAt;


}

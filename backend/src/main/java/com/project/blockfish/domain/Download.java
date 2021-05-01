package com.project.blockfish.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "downloads")
public class Download {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "download_id")
    private Long id;

    @OneToOne(mappedBy = "download")
    private Member member;

//    @OneToMany
//    @JoinColumn(name = "file_id")
//    private List<File> downloads;
}

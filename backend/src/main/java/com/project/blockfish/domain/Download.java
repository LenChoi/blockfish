package com.project.blockfish.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Download {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DOWNLOAD_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private Long fileId;

    private Date date;
}

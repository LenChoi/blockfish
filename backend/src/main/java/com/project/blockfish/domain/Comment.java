package com.project.blockfish.domain;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Long id;


    private String userId;

    private String comment;

    private int starRank;

    @ManyToOne
    @JoinColumn(name = "FILE_ID")
    private File file;



}

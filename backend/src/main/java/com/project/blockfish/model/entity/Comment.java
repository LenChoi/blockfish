package com.project.blockfish.model.entity;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String userId;

    private String comment;

    private int starRank;



}

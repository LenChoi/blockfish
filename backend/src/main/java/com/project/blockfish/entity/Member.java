package com.project.blockfish.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Getter
@Setter
@ToString
@Entity
@Table(name = "Members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank
    private String userId;
    @NotBlank
    private String password;
    @NotBlank
    private String name;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_NOT_PERMITTED;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createAt;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateAt;
}

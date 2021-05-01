package com.project.blockfish.domain;

import com.project.blockfish.config.UserRole;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @NotBlank
    private String userId;

    @NotBlank
    private String password;

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    private boolean userLock = false; //check the boolean value in mysql

    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_NOT_PERMITTED;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;

    @OneToOne
    @JoinColumn(name = "download_id")
    private Download download;

    public void setDownload(Download download) {
        this.download = download;
        download.setMember(this);
    }
}

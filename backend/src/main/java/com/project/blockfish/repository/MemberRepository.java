package com.project.blockfish.repository;

import com.project.blockfish.entity.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member findByUserId(String userId);
}

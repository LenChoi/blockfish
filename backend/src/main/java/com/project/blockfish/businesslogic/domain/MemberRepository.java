package com.project.blockfish.businesslogic.domain;

import com.project.blockfish.businesslogic.domain.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member findByUserId(String userId);
}

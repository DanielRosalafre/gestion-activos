package com.company.assetsystem.repository;

import com.company.assetsystem.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    long countByReturnedAtIsNull();
}

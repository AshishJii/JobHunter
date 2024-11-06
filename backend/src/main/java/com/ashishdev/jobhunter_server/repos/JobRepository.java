package com.ashishdev.jobhunter_server.repos;

import com.ashishdev.jobhunter_server.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobRepository extends JpaRepository<Job, Long> {
}

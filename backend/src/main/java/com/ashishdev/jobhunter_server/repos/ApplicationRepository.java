package com.ashishdev.jobhunter_server.repos;

import com.ashishdev.jobhunter_server.entity.Application;
import com.ashishdev.jobhunter_server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.ashishdev.jobhunter_server.model.ApplicationDetailsDto;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByJobId(Long jobId);
    List<Application> findBySeekerId(Long seekerId);

    @Query("SELECT new com.ashishdev.jobhunter_server.model.ApplicationDetailsDto(j.companyName, j.title, u.name, u.skills) " +
            "FROM Application a " +
            "JOIN a.job j " +
            "JOIN a.seeker u")
    List<ApplicationDetailsDto> findAllApplicationDetails();
}
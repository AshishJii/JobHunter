package com.ashishdev.jobhunter_server.service;

import com.ashishdev.jobhunter_server.entity.Application;
import com.ashishdev.jobhunter_server.model.ApplicationDetailsDto;
import com.ashishdev.jobhunter_server.repos.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    public Application applyToJob(@RequestBody Application application) {
        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByUser(Long userId) {
        return applicationRepository.findBySeekerId(userId);
    }

    public List<ApplicationDetailsDto> getAllApplicationDetails() {
        return applicationRepository.findAllApplicationDetails();
    }
}

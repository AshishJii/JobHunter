package com.ashishdev.jobhunter_server.controller;

import com.ashishdev.jobhunter_server.entity.Application;
import com.ashishdev.jobhunter_server.model.ApplicationDetailsDto;
import com.ashishdev.jobhunter_server.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    public Application applyToJob(@RequestBody Application application) {
        return applicationService.applyToJob(application);
    }


    @GetMapping("/user/{userId}")
    public List<Application> getApplicationsByUser(@PathVariable Long userId) {
        return applicationService.getApplicationsByUser(userId);
    }

    @GetMapping("/details")
    public List<ApplicationDetailsDto> getApplicationDetails() {
        return applicationService.getAllApplicationDetails();
    }
}


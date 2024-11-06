

package com.ashishdev.jobhunter_server.controller;

import com.ashishdev.jobhunter_server.entity.Job;
import com.ashishdev.jobhunter_server.entity.User;
import com.ashishdev.jobhunter_server.model.JobCreateDTO;
import com.ashishdev.jobhunter_server.service.JobService;
import com.ashishdev.jobhunter_server.service.UserService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/jobs", produces = MediaType.APPLICATION_JSON_VALUE)
public class JobController {
    private final JobService jobService;

    public JobController(final JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Job>> allJobs() {
        List <Job> jobs = jobService.allJobs();
        return ResponseEntity.ok(jobs);
    }

    @PostMapping
    public ResponseEntity<Job> addJob(@RequestBody JobCreateDTO jobCreateDTO) {
        Job createdJob = jobService.addJob(jobCreateDTO);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }
}

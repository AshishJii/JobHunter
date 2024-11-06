package com.ashishdev.jobhunter_server.service;

import com.ashishdev.jobhunter_server.entity.Job;
//import com.ashishdev.jobhunter_server.model.JobDto;
import com.ashishdev.jobhunter_server.model.JobCreateDTO;
import com.ashishdev.jobhunter_server.repos.JobRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class JobService {
    private final JobRepository jobRepository;

    public JobService(final JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> allJobs() {
        List<Job> jobs = new ArrayList<>();
        jobRepository.findAll().forEach(jobs::add);
        return jobs;
    }

    public Job addJob(JobCreateDTO jobCreateDTO) {
        Job job = new Job();
        job.setTitle(jobCreateDTO.getTitle());
        job.setDescription(jobCreateDTO.getDescription());
        job.setCompanyName(jobCreateDTO.getCompanyName());
        job.setSalary(jobCreateDTO.getSalary());

        return jobRepository.save(job);
    }
}

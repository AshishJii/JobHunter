package com.ashishdev.jobhunter_server.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplicationDetailsDto {
    private String companyName;
    private String jobTitle;
    private String seekerName;
    private String skills;
}
package com.ashishdev.jobhunter_server.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobCreateDTO {
    private String title;
    private String description;
    private String companyName;
    private Double salary;
}
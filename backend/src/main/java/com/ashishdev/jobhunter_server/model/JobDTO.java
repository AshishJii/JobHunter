package com.ashishdev.jobhunter_server.model;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobDTO {
    private Integer id;
    private String title;
    private String description;
    private String companyName;
    private Double salary;
    private Date createdAt;
    private Date updatedAt;
}

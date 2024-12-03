package com.ashishdev.jobhunter_server.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@Getter
@Setter
public class RegisterUserDto {
    @NotNull
    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String mobile;

    @Size(max = 255)
    private String email;

    @Size(max = 255)
    private String password;

    @Size(max = 255)
    private String skills;

    private MultipartFile resume;
}

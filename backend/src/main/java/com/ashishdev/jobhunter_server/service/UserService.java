package com.ashishdev.jobhunter_server.service;

import com.ashishdev.jobhunter_server.entity.User;
//import com.ashishdev.jobhunter_server.model.UserDto;
import com.ashishdev.jobhunter_server.repos.UserRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}

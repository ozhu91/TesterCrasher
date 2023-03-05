package com.addressBookApp.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/auth/login")
public class AuthController {

    @GetMapping
    public Boolean login() {
        return true;
    }
}

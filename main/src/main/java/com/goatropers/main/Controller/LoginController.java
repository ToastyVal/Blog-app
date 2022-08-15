package com.goatropers.main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goatropers.main.model.Login;
import com.goatropers.main.service.LoginService;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    LoginService dao;

    @PostMapping("/addLogin")
    public String add(@RequestBody Login login) {
        loginService.saveLogin(login);
        return "New login has been made";
    }
}

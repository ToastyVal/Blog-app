package com.goatropers.main.service;

import java.util.List;

import com.goatropers.main.model.Login;

public interface LoginService {
    public Login saveLogin(Login login);

    public List<Login> getAllLogins();
}

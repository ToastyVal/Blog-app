package com.goatropers.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goatropers.main.model.Login;
import com.goatropers.main.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login saveLogin(Login login) {
        // TODO Auto-generated method stub
        return loginRepository.save(login);
    }

    @Override
    public List<Login> getAllLogins() {
        // TODO Auto-generated method stub
        return null;
    }

}

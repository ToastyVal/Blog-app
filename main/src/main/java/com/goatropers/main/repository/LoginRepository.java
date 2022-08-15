package com.goatropers.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goatropers.main.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {

}

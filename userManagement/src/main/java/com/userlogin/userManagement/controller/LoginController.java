package com.userlogin.userManagement.controller;


import com.userlogin.userManagement.modal.AdminLogin;
import com.userlogin.userManagement.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private LoginService service;

    @CrossOrigin
    @PostMapping("login-admin")
    private ResponseEntity<String> loginUser(@RequestBody AdminLogin modal){
        String token=service.loginUser(modal);
        if(token!=null){
            return ResponseEntity.ok(token);
        }else{
            return ResponseEntity.badRequest().body("You are not Admin, Please contact Administrator");
        }
    }
}

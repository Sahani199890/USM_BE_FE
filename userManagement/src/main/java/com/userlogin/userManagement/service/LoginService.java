package com.userlogin.userManagement.service;

import com.userlogin.userManagement.entity.AdminLoginEntity;
import com.userlogin.userManagement.modal.AdminLogin;
import com.userlogin.userManagement.repo.AdminLoginRepo;
import com.userlogin.userManagement.security.JwtTokenSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private AdminLoginRepo repo;
    @Autowired
    private JwtTokenSecurity security;
    public String loginUser(AdminLogin modal) {
        AdminLoginEntity entity=repo.findByEmail(modal.getEmail());
        if(entity!=null && entity.getPassword().equals(modal.getPassword())){
            return security.generateToken(entity.getUsername(),entity.getPassword());
        }
        return null;
    }

    public boolean tokenValidator(String token){
        try{
            String data=security.extractAdminId(token);
            AdminLoginEntity admin=repo.findByEmail(data.split("@@")[0]);
            return security.isTokenValid(token,admin);
        }catch (Exception e){
            return false;
        }
    }

}

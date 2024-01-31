package com.userlogin.userManagement.repo;

import com.userlogin.userManagement.entity.AdminLoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLoginRepo extends JpaRepository<AdminLoginEntity,Long> {

    public AdminLoginEntity findByEmail(String email);
}

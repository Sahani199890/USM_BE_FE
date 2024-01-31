package com.userlogin.userManagement.repo;

import com.userlogin.userManagement.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserDetailsRepo extends JpaRepository<UserDetails,Long> {
    UserDetails findByEmail(String email);

    @Query(value = "SELECT * FROM user_details u WHERE u.first_name LIKE %:userId% OR u.last_name LIKE %:userId% OR u.email LIKE %:userId% OR u.phone_number LIKE %:userId%", nativeQuery = true)
    List<UserDetails> findByDetails(String userId);
}

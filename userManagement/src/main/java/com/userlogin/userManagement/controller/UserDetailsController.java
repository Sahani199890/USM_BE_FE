package com.userlogin.userManagement.controller;

import com.userlogin.userManagement.entity.UserDetails;
import com.userlogin.userManagement.modal.UserDetailsModal;
import com.userlogin.userManagement.service.BadRequestException;
import com.userlogin.userManagement.service.LoginService;
import com.userlogin.userManagement.service.UsersDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserDetailsController {

    private final UsersDetailService service;
    private final LoginService loginService;
    @Autowired
    public UserDetailsController(UsersDetailService service,LoginService loginService){
        this.service=service;
        this.loginService=loginService;
    }

    @PostMapping("/create-customer")
    public ResponseEntity<List<UserDetails>> addCustomer(@RequestBody UserDetailsModal modal,@RequestHeader String accessToken){
        if(loginService.tokenValidator(accessToken)) {
            List<UserDetails> response = service.addCustomer(modal);
            if (response!=null) {
                return ResponseEntity.ok(response);
            }
            throw BadRequestException.of("Cannot add the data");
        }
        throw BadRequestException.of("You are unauthorized user");
    }
    @PutMapping("/update-customer/{id}")
    public ResponseEntity<List<UserDetails>> updateCustomer(@RequestBody UserDetailsModal modal,@PathVariable String id,@RequestHeader String accessToken) {
        if (loginService.tokenValidator(accessToken)) {
            List<UserDetails> response = service.updateCustomer(modal,id);
            if(response!=null){
                return ResponseEntity.ok(response);
            }else{
                 throw BadRequestException.of("Cannot Update the user");
            }
        }
        throw BadRequestException.of("You are unauthorized user");
    }
    @GetMapping("/get-one-user/{userDetail}")
    public ResponseEntity<List<UserDetails>> getUSerById(@PathVariable String userDetail,@RequestHeader String accessToken){
        if(loginService.tokenValidator(accessToken)) {
            List<UserDetails> response = service.getUserById(userDetail);
            return ResponseEntity.ok(response);
        }throw BadRequestException.of("You are unauthorized to access");
    }
    @GetMapping("/get-users")
    public ResponseEntity<List<UserDetails>> getUsers(@RequestHeader String accessToken) {
        if(loginService.tokenValidator(accessToken)) {
            List<UserDetails> response = service.getUsers();
            return ResponseEntity.ok(response);
        }throw BadRequestException.of("You are unauthorized to access");
    }
    @DeleteMapping("delete-user/{userId}")
    public ResponseEntity<List<UserDetails>> deleteUser(@PathVariable String userId,@RequestHeader String accessToken){
        if(loginService.tokenValidator(accessToken)) {
            List<UserDetails> response = service.deleteUser(userId);
            throw BadRequestException.of("You are unauthorized to access");
//            return ResponseEntity.ok(response);
        }throw BadRequestException.of("You are unauthorized to access");
    }
}

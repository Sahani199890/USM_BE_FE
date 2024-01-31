package com.userlogin.userManagement.modal;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDetailsModal {

    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private String state;
    private String email;
    private String phoneNumber;
}

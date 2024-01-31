package com.userlogin.userManagement.service;

public class BadRequestException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    public BadRequestException(String message) {
        super(message);
    }
    public static BadRequestException of(String message){
        return new BadRequestException(message);
    }
}

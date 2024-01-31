package com.userlogin.userManagement.service;


import com.userlogin.userManagement.entity.UserDetails;
import com.userlogin.userManagement.modal.UserDetailsModal;
import com.userlogin.userManagement.repo.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UsersDetailService {
    private final UserDetailsRepo repo;
    @Autowired
    public UsersDetailService(UserDetailsRepo repo){
        this.repo=repo;
    }

    public List<UserDetails> addCustomer(UserDetailsModal modal) {
        UserDetails entity=repo.findByEmail(modal.getEmail());
        if(entity==null) {
            repo.save(modalToEntity(modal));
            return repo.findAll();
        }
        return repo.findAll();

    }

    public List<UserDetails> updateCustomer(UserDetailsModal modal,String id) {
        Optional<UserDetails> oldModalOpt=repo.findById(Long.parseLong(id));
        if(oldModalOpt.isPresent()){
            UserDetails oldModal=oldModalOpt.get();
            oldModal.setFirstName(modal.getFirstName());
            oldModal.setLastName(modal.getLastName());
            oldModal.setEmail(modal.getEmail());
            oldModal.setStreet(modal.getStreet());
            oldModal.setCity(modal.getCity());
            oldModal.setState(modal.getState());
            oldModal.setPhoneNumber(modal.getPhoneNumber());
            repo.save(oldModal);
            return repo.findAll();
        }
        return null;
    }

    public List<UserDetails> getUserById(String userId) {
        return repo.findByDetails(userId);
    }

    public List<UserDetails> getUsers() {
        return repo.findAll();
    }
    public List<UserDetails> deleteUser(String user){
//        repo.deleteById(Long.parseLong(user));
        return repo.findAll();
    }

    public UserDetails modalToEntity(UserDetailsModal modal){
        UserDetails entity=new UserDetails();
        entity.setFirstName(modal.getFirstName());
        entity.setLastName(modal.getLastName());
        entity.setStreet(modal.getStreet());
        entity.setCity(modal.getCity());
        entity.setState(modal.getState());
        entity.setEmail(modal.getEmail());
        entity.setPhoneNumber(modal.getPhoneNumber());
        return entity;
    }
}

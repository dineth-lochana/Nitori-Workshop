package net.DinethLochana.DinethServer.controller;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Users_Dto;
import net.DinethLochana.DinethServer.service.Users_Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class Users_Controller {

    private Users_Service UsersService;

    //Build Add User Rest API.
    @PostMapping
    public ResponseEntity<Users_Dto> create_Users(@RequestBody Users_Dto users_Dto){
        Users_Dto saved_item = UsersService.create_Users(users_Dto);
        return new ResponseEntity<>(saved_item, HttpStatus.CREATED);

    }

    //Build Get ALL User Rest API.
    @GetMapping("{id}")
    public ResponseEntity<Users_Dto> get_Users_By_ID(@PathVariable("id") Integer user_id){
        Users_Dto users_Dto = UsersService.get_Users_By_ID(user_id);
        return ResponseEntity.ok(users_Dto);
    }


    //Get User by email.
    @GetMapping("/email/{email}")
    public ResponseEntity<Users_Dto> get_User_By_Email(@PathVariable("email") String user_email) {
    Users_Dto userDto = UsersService.get_User_By_Email(user_email);
    return ResponseEntity.ok(userDto);
    }

    //Get ALL User.
    @GetMapping
    public ResponseEntity<List<Users_Dto>> get_all_Users(){
        List<Users_Dto> users = UsersService.get_all_Users();
        return ResponseEntity.ok(users);
    }


    //Update a User.
    @PutMapping("{id}")
    public ResponseEntity<Users_Dto> update_Users(@PathVariable("id") Integer user_id, @RequestBody Users_Dto updatedUsersDto){
        Users_Dto updated_user =  UsersService.update_Users(user_id, updatedUsersDto);
        return ResponseEntity.ok(updated_user);
    }


    //Delete a User.
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete_Users(@PathVariable("id") Integer user_id){
        UsersService.delete_Users(user_id);
        return ResponseEntity.ok("User Deleted");
    }

}

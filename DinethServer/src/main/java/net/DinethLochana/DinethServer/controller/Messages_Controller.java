package net.DinethLochana.DinethServer.controller;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Messages_Dto;
import net.DinethLochana.DinethServer.service.Messages_Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/messages")
public class Messages_Controller {

    private Messages_Service MessagesService;

    //Build Add User Rest API.
    @PostMapping
    public ResponseEntity<Messages_Dto> create_Messages(@RequestBody Messages_Dto messages_Dto){
        Messages_Dto saved_item = MessagesService.create_Messages(messages_Dto);
        return new ResponseEntity<>(saved_item, HttpStatus.CREATED);
    }


    //Build Get ALL User Rest API.
    @GetMapping("{id}")
    public ResponseEntity<Messages_Dto> get_Messages_By_ID(@PathVariable("id") Integer message_id){
        Messages_Dto messages_Dto = MessagesService.get_Messages_By_ID(message_id);
        return ResponseEntity.ok(messages_Dto);
    }


    //Get User by email.
    @GetMapping("/email/{email}")
    public ResponseEntity<List<Messages_Dto>> get_Messages_By_Email(@PathVariable("email") String message_email) {
    List<Messages_Dto> messageDto = MessagesService.get_Messages_By_Email(message_email);
    return ResponseEntity.ok(messageDto);
    }


    //Get ALL User.
    @GetMapping
    public ResponseEntity<List<Messages_Dto>> get_all_Messages(){
        List<Messages_Dto> messages = MessagesService.get_all_Messages();
        return ResponseEntity.ok(messages);
    }


    //Update a User.
    @PutMapping("{id}")
    public ResponseEntity<Messages_Dto> update_Message(@PathVariable("id") Integer message_id, @RequestBody Messages_Dto updatedMessagesDto){
        Messages_Dto updated_message =  MessagesService.update_Message(message_id, updatedMessagesDto);
        return ResponseEntity.ok(updated_message);
    }


    //Delete a User.
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete_Message(@PathVariable("id") Integer message_id){
        MessagesService.delete_message(message_id);
        return ResponseEntity.ok("Message Deleted");
    }

}

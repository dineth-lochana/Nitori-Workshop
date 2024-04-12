package net.DinethLochana.DinethServer.controller;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Computer_Item_Dto;
import net.DinethLochana.DinethServer.service.Computer_Item_Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/computer_item")
public class Computer_Item_Controller {

    private Computer_Item_Service ComputerItemService;

    //Build Add Computer Item Rest API.
    @PostMapping
    public ResponseEntity<Computer_Item_Dto> create_Computer_Item(@RequestBody Computer_Item_Dto computerItemDto){
        Computer_Item_Dto saved_item = ComputerItemService.create_Computer_Item(computerItemDto);
        return new ResponseEntity<>(saved_item, HttpStatus.CREATED);

    }

    //Build Get ALL Computer Items Rest API.
    @GetMapping("{id}")
    public ResponseEntity<Computer_Item_Dto> get_Computer_Item_By_ID(@PathVariable("id") Integer item_id){
        Computer_Item_Dto computerItemDto = ComputerItemService.get_Computer_Item_By_ID(item_id);
        return ResponseEntity.ok(computerItemDto);
    }

    //Get ALL Computer Items.
    @GetMapping
    public ResponseEntity<List<Computer_Item_Dto>> get_all_Computer_Items(){
        List<Computer_Item_Dto> computerItems = ComputerItemService.get_all_Computer_Items();
        return ResponseEntity.ok(computerItems);
    }


    //Update a Computer Item Entry.
    @PutMapping("{id}")
    public ResponseEntity<Computer_Item_Dto> update_computer_Item(@PathVariable("id") Integer item_id, @RequestBody Computer_Item_Dto updatedItemDto){

        Computer_Item_Dto updated_item =  ComputerItemService.update_Computer_Item(item_id, updatedItemDto);

        return ResponseEntity.ok(updated_item);
    }


    //Delete a Computer Item Entry.
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete_Computer_Item(@PathVariable("id") Integer item_id){
        ComputerItemService.delete_Computer_Item(item_id);
        return ResponseEntity.ok("Computer Item Deleted");
    }

}

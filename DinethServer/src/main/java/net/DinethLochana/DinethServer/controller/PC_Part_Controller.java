package net.DinethLochana.DinethServer.controller;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.PC_Part_Dto;
import net.DinethLochana.DinethServer.service.PC_Part_Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/new_pc_item")
public class PC_Part_Controller {

    private final PC_Part_Service pc_part_service;

    // Build Add Computer Item Rest API.
    @PostMapping
    public ResponseEntity<PC_Part_Dto> create_PC_Part(@RequestBody PC_Part_Dto pc_part_dto) {
        PC_Part_Dto savedItem = pc_part_service.create_PC_Part(pc_part_dto);
        return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
    }

    // Build Get ALL Computer Items Rest API.
    @GetMapping("{id}")
    public ResponseEntity<PC_Part_Dto> get_PC_Part_By_ID(@PathVariable("id") Integer itemId) {
        PC_Part_Dto pcPartDto = pc_part_service.get_PC_Part_By_ID(itemId);
        return ResponseEntity.ok(pcPartDto);
    }

    // Get ALL Computer Items.
    @GetMapping
    public ResponseEntity<List<PC_Part_Dto>> get_all_PC_Part() {
        List<PC_Part_Dto> computerItems = pc_part_service.get_all_PC_Part();
        return ResponseEntity.ok(computerItems);
    }

    // Update a Computer Item Entry.
    @PutMapping("{id}")
    public ResponseEntity<PC_Part_Dto> update_PC_Part(@PathVariable("id") Integer itemId, @RequestBody PC_Part_Dto updatedItemDto) {
        PC_Part_Dto updatedItem = pc_part_service.update_PC_Part(itemId, updatedItemDto);
        return ResponseEntity.ok(updatedItem);
    }

    // Delete a Computer Item Entry.
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete_PC_Part(@PathVariable("id") Integer itemId) {
        pc_part_service.delete_PC_Part(itemId);
        return ResponseEntity.ok("PC Part Deleted");
    }
}

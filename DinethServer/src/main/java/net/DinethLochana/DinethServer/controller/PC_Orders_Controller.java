package net.DinethLochana.DinethServer.controller;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.PC_Orders_Dto;
import net.DinethLochana.DinethServer.service.PC_Orders_Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/pc_orders")
public class PC_Orders_Controller {

    private final PC_Orders_Service pcOrdersService;

    // Create PC Order
    @PostMapping
    public ResponseEntity<PC_Orders_Dto> createPCOrder(@RequestBody PC_Orders_Dto pcOrdersDto) {
        PC_Orders_Dto savedOrder = pcOrdersService.createPCOrder(pcOrdersDto);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // Get PC Order by ID
    @GetMapping("{id}")
    public ResponseEntity<PC_Orders_Dto> getPCOrderByID(@PathVariable("id") Integer orderId) {
        PC_Orders_Dto pcOrdersDto = pcOrdersService.getPCOrderByID(orderId);
        return ResponseEntity.ok(pcOrdersDto);
    }

    // Get All PC Orders
    @GetMapping
    public ResponseEntity<List<PC_Orders_Dto>> getAllPCOrders() {
        List<PC_Orders_Dto> pcOrdersList = pcOrdersService.getAllPCOrders();
        return ResponseEntity.ok(pcOrdersList);
    }

    // Update PC Order
    @PutMapping("{id}")
    public ResponseEntity<PC_Orders_Dto> updatePCOrder(@PathVariable("id") Integer orderId, @RequestBody PC_Orders_Dto updatedOrderDto) {
        PC_Orders_Dto updatedOrder = pcOrdersService.updatePCOrder(orderId, updatedOrderDto);
        return ResponseEntity.ok(updatedOrder);
    }

    // Delete PC Order
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePCOrder(@PathVariable("id") Integer orderId) {
        pcOrdersService.deletePCOrder(orderId);
        return ResponseEntity.ok("PC Order Deleted");
    }


}

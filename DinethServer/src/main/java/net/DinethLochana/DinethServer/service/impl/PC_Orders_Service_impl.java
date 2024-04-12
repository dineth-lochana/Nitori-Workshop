package net.DinethLochana.DinethServer.service.impl;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.PC_Orders_Dto;
import net.DinethLochana.DinethServer.entity.PC_Orders;
import net.DinethLochana.DinethServer.exception.Resource_Not_Found_Exception;
import net.DinethLochana.DinethServer.mapper.PC_Orders_Mapper;
import net.DinethLochana.DinethServer.repository.PC_Orders_Repository;
import net.DinethLochana.DinethServer.service.PC_Orders_Service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PC_Orders_Service_impl implements PC_Orders_Service {

    private final PC_Orders_Repository pcOrdersRepository;

    @Override
    public PC_Orders_Dto createPCOrder(PC_Orders_Dto pcOrdersDto) {
        PC_Orders pcOrders = PC_Orders_Mapper.mapToEntity(pcOrdersDto);
        PC_Orders savedOrder = pcOrdersRepository.save(pcOrders);
        return PC_Orders_Mapper.mapToDto(savedOrder);
    }

    @Override
    public PC_Orders_Dto getPCOrderByID(Integer orderId) {
        PC_Orders pcOrders = pcOrdersRepository.findById(orderId)
                .orElseThrow(() -> new Resource_Not_Found_Exception("PC Order not found with ID: " + orderId));
        return PC_Orders_Mapper.mapToDto(pcOrders);
    }

    @Override
    public List<PC_Orders_Dto> getAllPCOrders() {
        List<PC_Orders> pcOrdersList = pcOrdersRepository.findAll();
        return pcOrdersList.stream()
                .map(PC_Orders_Mapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public PC_Orders_Dto updatePCOrder(Integer orderId, PC_Orders_Dto updatedOrderDto) {
        PC_Orders pcOrders = pcOrdersRepository.findById(orderId)
                .orElseThrow(() -> new Resource_Not_Found_Exception("PC Order not found with ID: " + orderId));

        // Update PC_Orders fields with values from DTO
        pcOrders.setOrder_case(updatedOrderDto.getOrder_case());
        pcOrders.setOrder_mouse(updatedOrderDto.getOrder_mouse());
        pcOrders.setOrder_speaker(updatedOrderDto.getOrder_speaker());
        pcOrders.setOrder_keyboard(updatedOrderDto.getOrder_keyboard());
        pcOrders.setOrder_monitor(updatedOrderDto.getOrder_monitor());
        pcOrders.setOrder_cpu(updatedOrderDto.getOrder_cpu());
        pcOrders.setOrder_gpu(updatedOrderDto.getOrder_gpu());
        pcOrders.setOrder_motherboard(updatedOrderDto.getOrder_motherboard());
        pcOrders.setOrder_ram(updatedOrderDto.getOrder_ram());
        pcOrders.setOrder_psu(updatedOrderDto.getOrder_psu());
        pcOrders.setOrder_storage(updatedOrderDto.getOrder_storage());
        pcOrders.setOrder_nic(updatedOrderDto.getOrder_nic());
        pcOrders.setOrder_input(updatedOrderDto.getOrder_input());
        pcOrders.setOrder_webcam(updatedOrderDto.getOrder_webcam());

        pcOrders.setOrder_user(updatedOrderDto.getOrder_user());
        pcOrders.setOrder_status(updatedOrderDto.getOrder_status());

        PC_Orders savedOrder = pcOrdersRepository.save(pcOrders);
        return PC_Orders_Mapper.mapToDto(savedOrder);
    }

    @Override
    public void deletePCOrder(Integer orderId) {
        if (!pcOrdersRepository.existsById(orderId)) {
            throw new Resource_Not_Found_Exception("PC Order not found with ID: " + orderId);
        }
        pcOrdersRepository.deleteById(orderId);
    }



}

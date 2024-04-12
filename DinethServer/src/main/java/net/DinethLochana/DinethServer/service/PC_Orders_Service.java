package net.DinethLochana.DinethServer.service;

import net.DinethLochana.DinethServer.dto.PC_Orders_Dto;

import java.util.List;

public interface PC_Orders_Service {
    PC_Orders_Dto createPCOrder(PC_Orders_Dto pcOrdersDto);

    PC_Orders_Dto getPCOrderByID(Integer orderId);

    List<PC_Orders_Dto> getAllPCOrders();

    PC_Orders_Dto updatePCOrder(Integer orderId, PC_Orders_Dto updatedOrderDto);

    void deletePCOrder(Integer orderId);
}

package net.DinethLochana.DinethServer.mapper;

import net.DinethLochana.DinethServer.dto.PC_Orders_Dto;
import net.DinethLochana.DinethServer.entity.PC_Orders;

public class PC_Orders_Mapper {

    public static PC_Orders_Dto mapToDto(PC_Orders pcOrders) {
        return new PC_Orders_Dto(
                pcOrders.getOrder_id(),
                pcOrders.getOrder_case(),
                pcOrders.getOrder_mouse(),
                pcOrders.getOrder_speaker(),
                pcOrders.getOrder_keyboard(),
                pcOrders.getOrder_monitor(),
                pcOrders.getOrder_cpu(),
                pcOrders.getOrder_gpu(),
                pcOrders.getOrder_motherboard(),
                pcOrders.getOrder_ram(),
                pcOrders.getOrder_psu(),
                pcOrders.getOrder_storage(),
                pcOrders.getOrder_nic(),
                pcOrders.getOrder_input(),
                pcOrders.getOrder_webcam(),
                pcOrders.getOrder_user(), 
                pcOrders.getOrder_status() 
        );
    }

    public static PC_Orders mapToEntity(PC_Orders_Dto pcOrdersDto) {
        return new PC_Orders(
                pcOrdersDto.getOrder_id(),
                pcOrdersDto.getOrder_case(),
                pcOrdersDto.getOrder_mouse(),
                pcOrdersDto.getOrder_speaker(),
                pcOrdersDto.getOrder_keyboard(),
                pcOrdersDto.getOrder_monitor(),
                pcOrdersDto.getOrder_cpu(),
                pcOrdersDto.getOrder_gpu(),
                pcOrdersDto.getOrder_motherboard(),
                pcOrdersDto.getOrder_ram(),
                pcOrdersDto.getOrder_psu(),
                pcOrdersDto.getOrder_storage(),
                pcOrdersDto.getOrder_nic(),
                pcOrdersDto.getOrder_input(),
                pcOrdersDto.getOrder_webcam(),
                pcOrdersDto.getOrder_user(), 
                pcOrdersDto.getOrder_status()
        );
    }
}

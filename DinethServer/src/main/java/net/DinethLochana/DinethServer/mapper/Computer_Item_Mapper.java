package net.DinethLochana.DinethServer.mapper;

import net.DinethLochana.DinethServer.dto.Computer_Item_Dto;
import net.DinethLochana.DinethServer.entity.Computer_Item;

public class Computer_Item_Mapper {

    public static Computer_Item_Dto map_to_item_dto(Computer_Item computer_item){
        return new Computer_Item_Dto(
                computer_item.getItem_id(),
                computer_item.getItem_name(),
                computer_item.getItem_type(),
                computer_item.getSubmitted_by(),
                computer_item.getDate(),
                computer_item.getItem_status(),
                computer_item.getItem_image1(),
                computer_item.getItem_image2(),
                computer_item.getItem_image3()
        );
    }

    public static Computer_Item map_to_item(Computer_Item_Dto computer_item_dto){
        return new Computer_Item(
                computer_item_dto.getItem_id(),
                computer_item_dto.getItem_name(),
                computer_item_dto.getItem_type(),
                computer_item_dto.getSubmitted_by(),
                computer_item_dto.getDate(),
                computer_item_dto.getItem_status(),
                computer_item_dto.getItem_image1(),
                computer_item_dto.getItem_image2(),
                computer_item_dto.getItem_image3()
        );
    }

}

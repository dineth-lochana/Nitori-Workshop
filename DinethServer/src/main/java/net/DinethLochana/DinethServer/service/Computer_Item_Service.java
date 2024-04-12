package net.DinethLochana.DinethServer.service;

import net.DinethLochana.DinethServer.dto.Computer_Item_Dto;

import java.util.List;

public interface Computer_Item_Service {
 Computer_Item_Dto create_Computer_Item(Computer_Item_Dto computerItemDto);

 Computer_Item_Dto get_Computer_Item_By_ID(Integer item_id);

 List<Computer_Item_Dto> get_all_Computer_Items();

 Computer_Item_Dto update_Computer_Item(Integer item_id, Computer_Item_Dto updatedItemDto);

void delete_Computer_Item(Integer item_id);
}



package net.DinethLochana.DinethServer.service.impl;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Computer_Item_Dto;
import net.DinethLochana.DinethServer.entity.Computer_Item;
import net.DinethLochana.DinethServer.exception.Resource_Not_Found_Exception;
import net.DinethLochana.DinethServer.mapper.Computer_Item_Mapper;
import net.DinethLochana.DinethServer.repository.Computer_Item_Repository;
import net.DinethLochana.DinethServer.service.Computer_Item_Service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class Computer_Item_Service_impl implements Computer_Item_Service {

    public Computer_Item_Repository computerItemRepository;

    @Override
    public Computer_Item_Dto create_Computer_Item(Computer_Item_Dto computerItemDto) {

        Computer_Item computerItem = Computer_Item_Mapper.map_to_item(computerItemDto);
        Computer_Item saved_item = computerItemRepository.save(computerItem);

        return Computer_Item_Mapper.map_to_item_dto(saved_item);
    }

    @Override
    public Computer_Item_Dto get_Computer_Item_By_ID(Integer item_id) {

        Computer_Item computerItem = computerItemRepository.findById(item_id)
                .orElseThrow(()-> new Resource_Not_Found_Exception("Item not found "+item_id));

        return Computer_Item_Mapper.map_to_item_dto(computerItem);
    }

    @Override
    public List<Computer_Item_Dto> get_all_Computer_Items() {
        List<Computer_Item> testallitems = computerItemRepository.findAll();
        return testallitems.stream().map((computerItem) -> Computer_Item_Mapper.map_to_item_dto(computerItem))
                .collect(Collectors.toList());

    }


    @Override
    public Computer_Item_Dto update_Computer_Item(Integer item_id, Computer_Item_Dto updatedItemDto) {

       Computer_Item computerItem = computerItemRepository.findById(item_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("Item not found "+ item_id)
        ); 

       computerItem.setItem_name(updatedItemDto.getItem_name());
       computerItem.setItem_type(updatedItemDto.getItem_type());
       computerItem.setSubmitted_by(updatedItemDto.getSubmitted_by());
       computerItem.setDate(updatedItemDto.getDate());
       computerItem.setItem_status(updatedItemDto.getItem_status());
       computerItem.setItem_image1(updatedItemDto.getItem_image1());
       computerItem.setItem_image2(updatedItemDto.getItem_image2());
       computerItem.setItem_image3(updatedItemDto.getItem_image3());

       Computer_Item saved_item = computerItemRepository.save(computerItem);
       return Computer_Item_Mapper.map_to_item_dto(saved_item);
    }



    @Override
    public void delete_Computer_Item(Integer item_id){
        
        Computer_Item computerItem = computerItemRepository.findById(item_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("Item not found "+ item_id)
        ); 
        
        computerItemRepository.deleteById(item_id);
    }

}

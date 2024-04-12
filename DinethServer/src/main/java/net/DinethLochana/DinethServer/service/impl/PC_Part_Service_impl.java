package net.DinethLochana.DinethServer.service.impl;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.PC_Part_Dto;
import net.DinethLochana.DinethServer.entity.PC_Part;
import net.DinethLochana.DinethServer.exception.Resource_Not_Found_Exception;
import net.DinethLochana.DinethServer.mapper.PC_Part_Mapper;
import net.DinethLochana.DinethServer.repository.PC_Part_Repository;
import net.DinethLochana.DinethServer.service.PC_Part_Service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PC_Part_Service_impl implements PC_Part_Service {

    public PC_Part_Repository pc_partRepository;

    @Override
    public PC_Part_Dto create_PC_Part(PC_Part_Dto pc_part_dto) {

        PC_Part pc_part = PC_Part_Mapper.mapToPcPart(pc_part_dto);
        PC_Part saved_item = pc_partRepository.save(pc_part);

        return PC_Part_Mapper.mapToPcPartDto(saved_item);
    }


    @Override
    public PC_Part_Dto get_PC_Part_By_ID(Integer pc_part_id) {

        PC_Part pc_part = pc_partRepository.findById(pc_part_id)
                .orElseThrow(() -> new Resource_Not_Found_Exception("PC Part not found " + pc_part_id));

        return PC_Part_Mapper.mapToPcPartDto(pc_part);
    }


    @Override
    public List<PC_Part_Dto> get_all_PC_Part() {
        List<PC_Part> allItems = pc_partRepository.findAll();
        return allItems.stream().map(PC_Part_Mapper::mapToPcPartDto)
                .collect(Collectors.toList());
    }


    @Override
    public PC_Part_Dto update_PC_Part(Integer pc_part_id, PC_Part_Dto updated_pc_part_dto) {

        PC_Part pc_part = pc_partRepository.findById(pc_part_id).orElseThrow(
                () -> new Resource_Not_Found_Exception("PC Part not found " + pc_part_id)
        );

        pc_part.setNewPcPartName(updated_pc_part_dto.getNewPcPartName());
        pc_part.setNewPcPartStatus(updated_pc_part_dto.getNewPcPartStatus());
        pc_part.setNewPcPartPrice(updated_pc_part_dto.getNewPcPartPrice());
        pc_part.setNewPcPartType(updated_pc_part_dto.getNewPcPartType()); 



        PC_Part saved_item = pc_partRepository.save(pc_part);
        return PC_Part_Mapper.mapToPcPartDto(saved_item);
    }


    @Override
    public void delete_PC_Part(Integer pc_part_id) {

        pc_partRepository.deleteById(pc_part_id);
    }

}
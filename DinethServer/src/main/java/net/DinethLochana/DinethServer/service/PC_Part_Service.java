package net.DinethLochana.DinethServer.service;

import net.DinethLochana.DinethServer.dto.PC_Part_Dto;

import java.util.List;

public interface PC_Part_Service {

 PC_Part_Dto create_PC_Part(PC_Part_Dto pc_part_dto);

 PC_Part_Dto get_PC_Part_By_ID(Integer new_pc_part_id);

 List<PC_Part_Dto> get_all_PC_Part();

 PC_Part_Dto update_PC_Part(Integer new_pc_part_id, PC_Part_Dto updated_pc_part_dto);

void delete_PC_Part(Integer pc_pc_part_id);
}

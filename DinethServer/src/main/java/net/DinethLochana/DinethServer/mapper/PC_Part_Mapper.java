package net.DinethLochana.DinethServer.mapper;

import net.DinethLochana.DinethServer.dto.PC_Part_Dto;
import net.DinethLochana.DinethServer.entity.PC_Part;

public class PC_Part_Mapper {

    public static PC_Part_Dto mapToPcPartDto(PC_Part pcPart) {
        return new PC_Part_Dto(
                pcPart.getNewPcPartId(),
                pcPart.getNewPcPartName(),
                pcPart.getNewPcPartStatus(),
                pcPart.getNewPcPartPrice(),
                pcPart.getNewPcPartType() 
        );
    }

    public static PC_Part mapToPcPart(PC_Part_Dto pcPartDto) {
        return new PC_Part(
                pcPartDto.getNewPcPartId(),
                pcPartDto.getNewPcPartName(),
                pcPartDto.getNewPcPartStatus(),
                pcPartDto.getNewPcPartPrice(),
                pcPartDto.getNewPcPartType() 
        );
    }
}

package net.DinethLochana.DinethServer.mapper;

import net.DinethLochana.DinethServer.dto.Messages_Dto;
import net.DinethLochana.DinethServer.entity.Messages;

public class Messages_Mapper {

    public static Messages_Dto map_to_messages_dto(Messages message){
        return new Messages_Dto(

                message.getMessage_id(),
                message.getSubmittedby(),
                message.getDate(),
                message.getMsgtext(),
                message.getMessage_status(),
                message.getMessage_image()
        );
    }

    public static Messages map_to_messages(Messages_Dto message_dto){
        return new Messages(

                message_dto.getMessage_id(),
                message_dto.getSubmittedby(),
                message_dto.getDate(),
                message_dto.getMsgtext(),
                message_dto.getMessage_status(),
                message_dto.getMessage_image()

        );
    }

}

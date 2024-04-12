package net.DinethLochana.DinethServer.service;

import net.DinethLochana.DinethServer.dto.Messages_Dto;

import java.util.List;

public interface Messages_Service{

 Messages_Dto create_Messages(Messages_Dto message_dto);

 Messages_Dto get_Messages_By_ID(Integer message_id);

 List<Messages_Dto> get_Messages_By_Email(String user_email);

 List<Messages_Dto> get_all_Messages();

 Messages_Dto update_Message(Integer message_id, Messages_Dto updatedMessageDto);

 void delete_message(Integer message_id);

}



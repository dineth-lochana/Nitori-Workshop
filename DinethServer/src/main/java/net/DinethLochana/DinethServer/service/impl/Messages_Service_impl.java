package net.DinethLochana.DinethServer.service.impl;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Messages_Dto;
import net.DinethLochana.DinethServer.entity.Messages;
import net.DinethLochana.DinethServer.exception.Resource_Not_Found_Exception;
import net.DinethLochana.DinethServer.mapper.Messages_Mapper;
import net.DinethLochana.DinethServer.repository.Messages_Repository;
import net.DinethLochana.DinethServer.service.Messages_Service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class Messages_Service_impl implements Messages_Service {

    public Messages_Repository messagesRepository;

    @Override
    public Messages_Dto create_Messages(Messages_Dto messages_Dto) {

        Messages message = Messages_Mapper.map_to_messages(messages_Dto);
        Messages saved_message = messagesRepository.save(message);

        return Messages_Mapper.map_to_messages_dto(message);
    }

    @Override
    public Messages_Dto get_Messages_By_ID(Integer message_id) {

        Messages message = messagesRepository.findById(message_id)
                .orElseThrow(()-> new Resource_Not_Found_Exception("Message not found "+ message_id));

        return Messages_Mapper.map_to_messages_dto(message);
    }


    @Override
    public List<Messages_Dto> get_Messages_By_Email(String user_email) {
        List<Messages> testallmessages = messagesRepository.findBySubmittedby(user_email);
        return testallmessages.stream().map((message) -> Messages_Mapper.map_to_messages_dto(message))
                .collect(Collectors.toList());
    }


    @Override
    public List<Messages_Dto> get_all_Messages() {
        List<Messages> testallmessages = messagesRepository.findAll();
        return testallmessages.stream().map((message) -> Messages_Mapper.map_to_messages_dto(message))
                .collect(Collectors.toList());

    }


    @Override
    public Messages_Dto update_Message(Integer message_id, Messages_Dto updatedMessagesDto) {

       Messages message = messagesRepository.findById(message_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("Message not found "+ message_id)
        ); 

       message.setSubmittedby(updatedMessagesDto.getSubmittedby());
       message.setDate(updatedMessagesDto.getDate());
       message.setMsgtext(updatedMessagesDto.getMsgtext());
       message.setMessage_status(updatedMessagesDto.getMessage_status());
       message.setMessage_image(updatedMessagesDto.getMessage_image());

       Messages saved_item = messagesRepository.save(message);
       return Messages_Mapper.map_to_messages_dto(saved_item);
    }



    @Override
    public void delete_message(Integer message_id){
        
        Messages message = messagesRepository.findById(message_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("Message not found "+ message_id)
        ); 
        
        messagesRepository.deleteById(message_id);
    }

}

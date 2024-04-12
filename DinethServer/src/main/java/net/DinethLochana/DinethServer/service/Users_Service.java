package net.DinethLochana.DinethServer.service;

import net.DinethLochana.DinethServer.dto.Users_Dto;

import java.util.List;

public interface Users_Service{
 Users_Dto create_Users(Users_Dto user_dto);

 Users_Dto get_Users_By_ID(Integer user_id);

 Users_Dto get_User_By_Email(String user_email);

 List<Users_Dto> get_all_Users();

 Users_Dto update_Users(Integer user_id, Users_Dto updatedUsersDto);

void delete_Users(Integer user_id);
}



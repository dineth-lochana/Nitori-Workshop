package net.DinethLochana.DinethServer.mapper;

import net.DinethLochana.DinethServer.dto.Users_Dto;
import net.DinethLochana.DinethServer.entity.Users;

public class Users_Mapper {

    public static Users_Dto map_to_users_dto(Users users){
        return new Users_Dto(
                users.getUser_id(),
                users.getUser_name(),
                users.getUser_type(),
                users.getUseremail(),
                users.getUser_verified(),
                users.getUser_password()
        );
    }

    public static Users map_to_users(Users_Dto users_dto){
        return new Users(
                users_dto.getUser_id(),
                users_dto.getUser_name(),
                users_dto.getUser_type(),
                users_dto.getUseremail(),
                users_dto.getUser_verified(),
                users_dto.getUser_password()
        );
    }

}

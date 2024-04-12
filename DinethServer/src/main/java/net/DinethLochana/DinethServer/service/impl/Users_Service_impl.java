package net.DinethLochana.DinethServer.service.impl;

import lombok.AllArgsConstructor;
import net.DinethLochana.DinethServer.dto.Users_Dto;
import net.DinethLochana.DinethServer.entity.Users;
import net.DinethLochana.DinethServer.exception.Resource_Not_Found_Exception;
import net.DinethLochana.DinethServer.mapper.Users_Mapper;
import net.DinethLochana.DinethServer.repository.Users_Repository;
import net.DinethLochana.DinethServer.service.Users_Service;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class Users_Service_impl implements Users_Service {

    public Users_Repository usersRepository;

    @Override
    public Users_Dto create_Users(Users_Dto users_Dto) {

        Users user = Users_Mapper.map_to_users(users_Dto);
        Users saved_item = usersRepository.save(user);

        return Users_Mapper.map_to_users_dto(saved_item);
    }

    @Override
    public Users_Dto get_Users_By_ID(Integer user_id) {

        Users user = usersRepository.findById(user_id)
                .orElseThrow(()-> new Resource_Not_Found_Exception("User not found "+ user_id));

        return Users_Mapper.map_to_users_dto(user);
    }


    @Override
    public Users_Dto get_User_By_Email(String user_email) {
        Users user = usersRepository.findByUseremail(user_email)
            .orElseThrow(() -> new Resource_Not_Found_Exception("User not found for email: " + user_email));
        return Users_Mapper.map_to_users_dto(user);
    }


    @Override
    public List<Users_Dto> get_all_Users() {
        List<Users> testallusers = usersRepository.findAll();
        return testallusers.stream().map((user) -> Users_Mapper.map_to_users_dto(user))
                .collect(Collectors.toList());

    }


    @Override
    public Users_Dto update_Users(Integer user_id, Users_Dto updatedUsersDto) {

       Users user = usersRepository.findById(user_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("User not found "+ user_id)
        ); 

       user.setUser_name(updatedUsersDto.getUser_name());
       user.setUser_type(updatedUsersDto.getUser_type());

       user.setUseremail(updatedUsersDto.getUseremail());
       user.setUser_verified(updatedUsersDto.getUser_verified());

       user.setUser_password(updatedUsersDto.getUser_password());

       Users saved_item = usersRepository.save(user);
       return Users_Mapper.map_to_users_dto(saved_item);
    }



    @Override
    public void delete_Users(Integer user_id){
        
        Users user = usersRepository.findById(user_id).orElseThrow(
            ()-> new Resource_Not_Found_Exception("User found "+ user_id)
        ); 
        
        usersRepository.deleteById(user_id);
    }

}

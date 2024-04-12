package net.DinethLochana.DinethServer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// We use this to transfer data between client and server

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Users_Dto {
    private int user_id;

    private String user_name;

    private String user_type;

    private String useremail;

    private String user_verified;

    private String user_password;
}


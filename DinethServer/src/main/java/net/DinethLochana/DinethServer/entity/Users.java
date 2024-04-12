package net.DinethLochana.DinethServer.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(name = "user_name", nullable = false)
    private String user_name;

    @Column(name = "user_type", nullable = false)
    private String user_type;

    @Column(name = "user_email", nullable = false)
    private String useremail;

    @Column(name = "user_verified", nullable = false)
    private String user_verified;

    @Column(name = "user_password", nullable = false)
    private String user_password;
}

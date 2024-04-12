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
@Table(name = "messages")
public class Messages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int message_id;

    @Column(name = "submittedby", nullable = false)
    private String submittedby;

    @Column(name = "date")
    private Date date;

    @Column(name = "msgtext")
    private String msgtext;

    @Column(name = "message_status")
    private String message_status;

    @Column(name = "message_image")
    private String message_image;

}

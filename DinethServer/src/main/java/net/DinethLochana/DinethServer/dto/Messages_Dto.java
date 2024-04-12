package net.DinethLochana.DinethServer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

// We use this to transfer data between client and server

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Messages_Dto {
    private int message_id;

    private String submittedby;

    private Date date;

    private String msgtext;

    private String message_status;

    private String message_image;
}


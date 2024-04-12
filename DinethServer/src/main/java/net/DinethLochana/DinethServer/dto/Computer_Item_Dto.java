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
public class Computer_Item_Dto {

    private int item_id;

    private String item_name;

    private String item_type;

    private String submitted_by;

    private Date date;

    private String item_status;

    private String item_image1;

    private String item_image2;

    private String item_image3;
}


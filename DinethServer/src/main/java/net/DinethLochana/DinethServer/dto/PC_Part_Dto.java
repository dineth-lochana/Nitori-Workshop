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
public class PC_Part_Dto {

    private int newPcPartId;

    private String newPcPartName;

    private String newPcPartStatus;

    private int newPcPartPrice;

    private String newPcPartType;
}


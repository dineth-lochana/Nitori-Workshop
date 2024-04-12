package net.DinethLochana.DinethServer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PC_Orders_Dto {

    private int order_id;

    private String order_case;

    private String order_mouse;

    private String order_speaker;

    private String order_keyboard;

    private String order_monitor;

    private String order_cpu;

    private String order_gpu;

    private String order_motherboard;

    private String order_ram;

    private String order_psu;

    private String order_storage;

    private String order_nic;

    private String order_input;

    private String order_webcam;

    private String order_user;

    private String order_status; 
}

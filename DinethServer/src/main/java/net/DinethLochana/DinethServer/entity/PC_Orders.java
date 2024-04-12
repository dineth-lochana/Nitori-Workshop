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
@Table(name = "pc_orders")
public class PC_Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int order_id;

    @Column(name = "order_case")
    private String order_case;

    @Column(name = "order_mouse")
    private String order_mouse;

    @Column(name = "order_speaker")
    private String order_speaker;

    @Column(name = "order_keyboard")
    private String order_keyboard;

    @Column(name = "order_monitor")
    private String order_monitor;

    @Column(name = "order_cpu")
    private String order_cpu;

    @Column(name = "order_gpu")
    private String order_gpu;

    @Column(name = "order_motherboard")
    private String order_motherboard;

    @Column(name = "order_ram")
    private String order_ram;

    @Column(name = "order_psu")
    private String order_psu;

    @Column(name = "order_storage")
    private String order_storage;

    @Column(name = "order_nic")
    private String order_nic;

    @Column(name = "order_input")
    private String order_input;

    @Column(name = "order_webcam")
    private String order_webcam;

    @Column(name = "order_user")
    private String order_user;

    @Column(name = "order_status")
    private String order_status;

}

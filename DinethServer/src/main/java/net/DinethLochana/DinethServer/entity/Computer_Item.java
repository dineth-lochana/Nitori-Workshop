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
@Table(name = "computer_item")
public class Computer_Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int item_id;

    @Column(name = "item_name", nullable = false)
    private String item_name;

    @Column(name = "item_type", nullable = false)
    private String item_type;

    @Column(name = "submitted_by", nullable = false)
    private String submitted_by;

    @Column(name = "date")
    private Date date;

    @Column(name = "item_status", nullable = false)
    private String item_status;

    @Column(name = "item_image1")
    private String item_image1;

    @Column(name = "item_image2")
    private String item_image2;

    @Column(name = "item_image3")
    private String item_image3;
}

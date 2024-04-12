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
@Table(name = "new_pc_part")
public class PC_Part {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int newPcPartId;

    @Column(name = "new_pc_part_name", nullable = false)
    private String newPcPartName;

    @Column(name = "new_pc_part_status", nullable = false)
    private String newPcPartStatus;

    @Column(name = "new_pc_part_price", nullable = false)
    private int newPcPartPrice;

    @Column(name = "new_pc_part_type", nullable = false)
    private String newPcPartType;

}

package com.example.demo.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="test")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name="seq_generator", sequenceName = "seq_test", initialValue = 1, allocationSize = 1)
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    private Long id;
    private String name;
    private String location;
    private String department;

}

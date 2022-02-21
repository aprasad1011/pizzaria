package com.prasad.pizzaria.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String description;

  @Enumerated(EnumType.STRING)
  private Type type;
  private double price;
}

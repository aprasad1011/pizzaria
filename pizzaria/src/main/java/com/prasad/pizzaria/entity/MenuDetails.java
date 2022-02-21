package com.prasad.pizzaria.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuDetails implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long detailsId;
  private long menuItemId;
  private Long crustId;
  private Long sauceId;
  private String toppings;
  private boolean addCheese;
  private boolean extraCheese;

}

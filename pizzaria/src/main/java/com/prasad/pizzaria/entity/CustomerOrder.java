package com.prasad.pizzaria.entity;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Builder
public class CustomerOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long orderId;

  private Long crustId;
  private Long sauceId;
  private String toppings;
  private boolean addCheese;
  private boolean extraCheese;
}

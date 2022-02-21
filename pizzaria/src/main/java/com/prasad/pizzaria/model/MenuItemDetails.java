package com.prasad.pizzaria.model;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class MenuItemDetails {
  private String name;
  private Long crust;
  private Long sauce;
  private List<Long> toppings;
  private boolean cheese;
  private boolean extraCheese;
}

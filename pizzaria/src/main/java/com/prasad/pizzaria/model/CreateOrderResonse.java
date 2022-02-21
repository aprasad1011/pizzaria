package com.prasad.pizzaria.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateOrderResonse {
  private long orderId;
}

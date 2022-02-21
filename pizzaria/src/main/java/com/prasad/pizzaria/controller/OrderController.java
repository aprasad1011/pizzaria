package com.prasad.pizzaria.controller;

import com.prasad.pizzaria.model.MenuItemDetails;
import com.prasad.pizzaria.model.CreateOrderResonse;
import com.prasad.pizzaria.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

  private final OrderService orderService;

  @Autowired
  public OrderController(OrderService orderService) {
    this.orderService = orderService;
  }

  @PostMapping("/create")
  public CreateOrderResonse createOrder(@RequestBody MenuItemDetails request){
    return orderService.createOrder(request);
  }


}

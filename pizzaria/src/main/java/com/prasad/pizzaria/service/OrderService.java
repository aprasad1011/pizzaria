package com.prasad.pizzaria.service;

import com.prasad.pizzaria.config.LongListConverter;
import com.prasad.pizzaria.entity.CustomerOrder;
import com.prasad.pizzaria.model.MenuItemDetails;
import com.prasad.pizzaria.model.CreateOrderResonse;
import com.prasad.pizzaria.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

  private final OrderRepository orderRepository;
  private final LongListConverter longListConverter;

  @Autowired
  public OrderService(OrderRepository orderRepository, LongListConverter longListConverter) {
    this.orderRepository = orderRepository;
    this.longListConverter = longListConverter;
  }

  public CreateOrderResonse createOrder(MenuItemDetails request){
    CustomerOrder newCustomerOrder = CustomerOrder.builder()
        .crustId(request.getCrust())
        .sauceId(request.getSauce())
        .toppings(longListConverter.convertToDatabaseColumn(request.getToppings()))
        .addCheese(request.isCheese())
        .extraCheese(request.isExtraCheese())
        .build();

      CustomerOrder createdCustomerOrder = orderRepository.saveAndFlush(newCustomerOrder);
      return CreateOrderResonse
          .builder()
          .orderId(createdCustomerOrder.getOrderId())
          .build();
  }

}

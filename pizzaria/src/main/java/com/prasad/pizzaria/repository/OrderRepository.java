package com.prasad.pizzaria.repository;

import com.prasad.pizzaria.entity.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {

}

package com.prasad.pizzaria.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prasad.pizzaria.entity.MenuItem;
import com.prasad.pizzaria.entity.Product;
import com.prasad.pizzaria.entity.Type;
import com.prasad.pizzaria.service.MenuDataService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.prasad.pizzaria.entity.Type.CRUST;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MenuDataController.class)
class MenuDataControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MenuDataService service;

  @Test
  void shouldReturnIngreditentsDetails() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    List<Product> crustProducts = new ArrayList<Product>(){{
      add(new Product(1, "Small", CRUST, 199L));
      add(new Product(2, "Medium", CRUST, 299L));
      add(new Product(3, "Large", CRUST, 399L));
    }};
    Map<Type, List<Product>> ingredientsMap = new HashMap<Type, List<Product>>(){{
      put(CRUST, crustProducts);
    }};
    when(service.getIngredientsData()).thenReturn(ingredientsMap);
    MvcResult result = this.mockMvc.perform(get("/api/ingredients"))
        .andExpect(status().isOk())
        .andReturn();

    Map reponse = mapper.readValue(result.getResponse().getContentAsByteArray(), Map.class);
    assertTrue(reponse.containsKey("CRUST"));
  }

  @Test
  void shouldReturnMenuList() throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    List<MenuItem> menuItems = new ArrayList<MenuItem>(){{
      add(new MenuItem(1, "The Cheese Dominator", "Loaded with 1 Pound of Mozzarella", "/static/pizza1.jpeg"));
      add(new MenuItem(2, "The Cheese Dominator 2", "Loaded with 2 Pound of Mozzarella", "/static/pizza2.jpeg"));
    }};
    when(service.getMenuList()).thenReturn(menuItems);
    MvcResult result = this.mockMvc.perform(get("/api/menuList"))
        .andExpect(status().isOk())
        .andReturn();

    List reponse = mapper.readValue(result.getResponse().getContentAsByteArray(), List.class);
    assertEquals(reponse.size(), menuItems.size());
  }

}
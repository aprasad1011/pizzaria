package com.prasad.pizzaria.controller;

import com.prasad.pizzaria.entity.MenuItem;
import com.prasad.pizzaria.entity.Product;
import com.prasad.pizzaria.entity.Type;
import com.prasad.pizzaria.model.MenuItemDetails;
import com.prasad.pizzaria.service.MenuDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MenuDataController {

  private final MenuDataService menuDataService;

  @Autowired
  public MenuDataController(MenuDataService menuDataService) {
    this.menuDataService = menuDataService;
  }

  @GetMapping("/ingredients")
  public Map<Type, List<Product>> getIngredientsData(){
    return menuDataService.getIngredientsData();
  }

  @GetMapping("/menuList")
  public List<MenuItem> getMenuList(){
    return menuDataService.getMenuList();
  };

  @GetMapping("/menuDetails")
  public MenuItemDetails getMenuItemsById(@RequestParam("itemId") long itemId){
    return menuDataService.getMenuDetails(itemId);
  };

}

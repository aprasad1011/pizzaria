package com.prasad.pizzaria.service;

import com.prasad.pizzaria.config.LongListConverter;
import com.prasad.pizzaria.entity.MenuDetails;
import com.prasad.pizzaria.entity.MenuItem;
import com.prasad.pizzaria.entity.Product;
import com.prasad.pizzaria.entity.Type;
import com.prasad.pizzaria.model.MenuItemDetails;
import com.prasad.pizzaria.repository.MenuDetailsRepository;
import com.prasad.pizzaria.repository.MenuItemRepository;
import com.prasad.pizzaria.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MenuDataService {

  private final ProductRepository productRepository;
  private final MenuDetailsRepository menuDetailsRepository;
  private final MenuItemRepository menuItemRepository;
  private final LongListConverter longListConverter;


  @Autowired
  public MenuDataService(ProductRepository productRepository, MenuDetailsRepository menuDetailsRepository, MenuItemRepository menuItemRepository, LongListConverter longListConverter) {
    this.productRepository = productRepository;
    this.menuDetailsRepository = menuDetailsRepository;
    this.menuItemRepository = menuItemRepository;
    this.longListConverter = longListConverter;
  }

  public Map<Type, List<Product>> getIngredientsData(){
    List<Product> products = productRepository.findAll();
    return products.stream().collect(Collectors.groupingBy(Product::getType));
  };

  public List<MenuItem> getMenuList() {
    return menuItemRepository.findAll();
  }

  public MenuItemDetails getMenuDetails(long id) {
  if(id == 0){
    return getDefaultMenuDetails();
  }
  MenuItem item = menuItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Invalid Menu Id"));
  MenuDetails details =  menuDetailsRepository.findByMenuItemId(id);
  return MenuItemDetails.builder()
        .name(item.getDisplayName())
        .cheese(details.isAddCheese())
        .extraCheese(details.isExtraCheese())
        .crust(details.getCrustId())
        .sauce(details.getSauceId())
        .toppings(longListConverter.convertToEntityAttribute(details.getToppings()))
        .build();
  }

  private MenuItemDetails getDefaultMenuDetails() {
    List<Long> toppingList = new ArrayList<Long>(){{
      add(10L);
      add(11L);
      add(12L);
    }};
    return MenuItemDetails.builder()
        .name("My Own Pizza")
        .cheese(true)
        .extraCheese(false)
        .crust(2L)
        .sauce(4L)
        .toppings(toppingList)
        .build();
  }
}

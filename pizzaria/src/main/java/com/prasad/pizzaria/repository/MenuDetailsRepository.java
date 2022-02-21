package com.prasad.pizzaria.repository;

import com.prasad.pizzaria.entity.MenuDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuDetailsRepository extends JpaRepository<MenuDetails, Long> {
  MenuDetails findByMenuItemId(long id);
}

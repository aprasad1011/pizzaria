package com.prasad.pizzaria.repository;

import com.prasad.pizzaria.entity.MenuDetails;
import com.prasad.pizzaria.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}

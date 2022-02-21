package com.prasad.pizzaria.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long itemId;
  private String displayName;
  private String description;
  private String imagePath;

}

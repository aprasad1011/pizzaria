-- crust
INSERT INTO PRODUCT (id, type, description, price) VALUES (1, 'CRUST', 'Small', 199);
INSERT INTO PRODUCT (id, type, description, price) VALUES (2, 'CRUST', 'Medium', 299);
INSERT INTO PRODUCT (id, type, description, price) VALUES (3, 'CRUST', 'Large', 399);

-- SAUCE
INSERT INTO PRODUCT (id, type, description, price) VALUES (4, 'SAUCE', 'Pesto', 30);
INSERT INTO PRODUCT (id, type, description, price) VALUES (5, 'SAUCE', 'White Garlic Sauce', 20);
INSERT INTO PRODUCT (id, type, description, price) VALUES (6, 'SAUCE', 'Garlic Ranch Sauce', 30);
INSERT INTO PRODUCT (id, type, description, price) VALUES (7, 'SAUCE', 'Hummus', 50);

-- Cheese
INSERT INTO PRODUCT (id, type, description, price) VALUES (8, 'CHEESE', 'Cheese', 50);
INSERT INTO PRODUCT (id, type, description, price) VALUES (9, 'EXTRA_CHEESE', 'Extra Cheese', 30);

-- Toppings
INSERT INTO PRODUCT (id, type, description, price) VALUES (10, 'TOPPING', 'Pepperoni', 80);
INSERT INTO PRODUCT (id, type, description, price) VALUES (11, 'TOPPING', 'Mushroom', 100);
INSERT INTO PRODUCT (id, type, description, price) VALUES (12, 'TOPPING', 'Onion', 50);
INSERT INTO PRODUCT (id, type, description, price) VALUES (13, 'TOPPING', 'Black olives', 110);
INSERT INTO PRODUCT (id, type, description, price) VALUES (14, 'TOPPING', 'Green pepper', 70);
INSERT INTO PRODUCT (id, type, description, price) VALUES (15, 'TOPPING', 'Fresh garlic', 30);

-- Chefs menu item
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (1, 'The Cheese Dominator', '/static/pizza1.jpeg', 'Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza');
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (2, 'Margherita', '/static/pizza2.jpeg', 'Classic delight with 100% real mozzarella cheese topped with a generous helping of herb sprinkle');
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (3, 'Peppy Paneer', '/static/pizza3.jpeg', 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika');
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (4, 'Veg Extravaganza', '/static/pizza4.jpeg', 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese');
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (5, 'Cheese n Corn', '/static/pizza5.jpeg', 'A delectable combination of sweet & juicy golden corn');
INSERT INTO MENU_ITEM(item_id, display_name, image_path, description) VALUES (6, 'Indi Tandoori Paneer', '/static/pizza6.jpeg', 'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo');

-- Chefs menu details
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (1, true, 2, true, 4, '12,13,14', 1);
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (2, true, 3, false, 5, '12,13', 2);
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (3, true, 2, true, 6, '12,13,14', 3);
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (4, true, 3, true, 7, '12,13,14', 4);
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (5, true, 2, true, 5, '10,11,12,13,14,15', 5);
INSERT INTO MENU_DETAILS(details_id, add_cheese, crust_id, extra_cheese, sauce_id, toppings, menu_item_id) VALUES (6, true, 3, true, 7, '12,13,14,15', 6);




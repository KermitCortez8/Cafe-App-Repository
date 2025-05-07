// src/data/coffees.js
import Meal from "../models/meal";

export const MEALS = [
  // c1 - Espresso
  new Meal(
    'm1',
    ['c1'],
    'Espresso',
    '$2.99',
    'simple',
    'https://s3.ppllstatics.com/diariovasco/www/multimedia/2024/11/13/espresso-RrCckvN0LEAFk54KAQQPcXM-1200x840@Diario%20Vasco.jpg',
    10,
    ['1 shot of espresso'],
    ['Brew the coffee at a high pressure to create a small, strong drink'],
    true,
    true,
    true,
    false
  ),
  new Meal(
    'm2',
    ['c1'],
    'Double Espresso',
    '$3.49',
    'simple',
    'https://lemongrassdeli.com/cdn/shop/products/Espresso_SQ_0dbe9837-380c-4504-9d5a-741440803119.jpg?v=1586498076',
    12,
    ['2 shots of espresso'],
    ['Brew the coffee at high pressure, double the quantity for a stronger drink'],
    true,
    true,
    true,
    false
  ),

  // c2 - Latte
  new Meal(
    'm3',
    ['c2'],
    'Classic Latte',
    '$3.50',
    'simple',
    'https://staresso.com/cdn/shop/articles/What_is_a_latte.jpg?v=1716606481',
    20,
    ['1 shot of espresso', 'Steamed milk', 'Foamed milk'],
    ['Brew espresso, steam the milk, pour the milk over the espresso'],
    false,
    true,
    false,
    false
  ),
  new Meal(
    'm4',
    ['c2'],
    'Vanilla Latte',
    '$3.75',
    'simple',
    'https://images.ctfassets.net/v601h1fyjgba/7wGcWZgV7yaSLXrodALIuw/2496353e1ec8c39dd44adfb45e8335d3/Vanilla_Latte.jpg',
    20,
    ['1 shot of espresso', 'Steamed milk', 'Vanilla syrup'],
    ['Brew espresso, steam the milk, pour vanilla syrup and milk over espresso'],
    false,
    true,
    false,
    false
  ),

  // c3 - Cappuccino
  new Meal(
    'm5',
    ['c3'],
    'Cappuccino',
    '$3.99',
    'medium',
    'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino',
    20,
    ['1 shot of espresso', 'Steamed milk', 'Foamed milk'],
    ['Brew espresso, steam the milk, top with foam'],
    false,
    true,
    false,
    false
  ),
  new Meal(
    'm6',
    ['c3'],
    'Iced Cappuccino',
    '$4.25',
    'medium',
    'https://images.ctfassets.net/v601h1fyjgba/1eje3eJjFrd8FkYxT2jniv/1bd8c902f5e48d95fdd3183c9993ed04/Lite_Iced_Cappuccino_Hi__1_.jpg',
    20,
    ['1 shot of espresso', 'Ice', 'Foamed milk'],
    ['Brew espresso, cool it down, pour over ice, and top with foam'],
    false,
    true,
    false,
    false
  ),

  // c4 - Iced Coffees
  new Meal(
    'm7',
    ['c4'],
    'Iced Coffee',
    '$3.49',
    'simple',
    'https://frostingandfettuccine.com/wp-content/uploads/2022/12/Instant-Iced-Coffee-5-1.jpg',
    15,
    ['Cold brew coffee', 'Ice'],
    ['Brew coffee, cool it down, serve over ice'],
    false,
    true,
    true,
    false
  ),
  new Meal(
    'm8',
    ['c4'],
    'Iced Mocha',
    '$3.99',
    'simple',
    'https://www.splenda.com/wp-content/uploads/2022/08/Creamy-Iced-Mocha-Latte-website-8023-scaled.jpg',
    15,
    ['Cold brew coffee', 'Ice', 'Chocolate syrup', 'Milk'],
    ['Brew coffee, mix chocolate syrup with milk, serve over ice'],
    false,
    true,
    false,
    false
  ),

  // c5 - Macchiato
  new Meal(
    'm9',
    ['c5'],
    'Caramel Macchiato',
    '$4.00',
    'medium',
    'https://www.recetasderechupete.com/wp-content/uploads/2022/01/Expresso-macchiato-1200x828.jpg',
    20,
    ['1 shot of espresso', 'Steamed milk', 'Caramel syrup'],
    ['Brew espresso, steam the milk, pour over espresso, add caramel syrup'],
    false,
    true,
    false,
    false
  ),
  
  // c6 - Mocha
  new Meal(
    'm10',
    ['c6'],
    'Mocha',
    '$4.50',
    'medium',
    'https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/6330/image-thumb__6330__schema_image/CafeMocha-hero.61028a28.jpg',
    25,
    ['1 shot of espresso', 'Steamed milk', 'Chocolate syrup', 'Whipped cream'],
    ['Brew espresso, steam the milk, mix with chocolate syrup, top with whipped cream'],
    false,
    true,
    false,
    false
  ),
];

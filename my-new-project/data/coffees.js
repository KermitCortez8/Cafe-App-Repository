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
    'https://images.unsplash.com/photo-1556741533-f6a35d41f1c8',
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
    'https://images.unsplash.com/photo-1600982605277-0c94cb8ab8f7',
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
    'https://images.unsplash.com/photo-1584797466828-4798ff35d4cc',
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
    'https://images.unsplash.com/photo-1534447744739-b1e708e1c347',
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
    'https://images.unsplash.com/photo-1612396644475-84a764f0f60e',
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
    'https://images.unsplash.com/photo-1556741403-7630bba58c74',
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
    'https://images.unsplash.com/photo-1616023648783-3cfecf496053',
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
    'https://images.unsplash.com/photo-1593642532873-e3e1d8bb4fa5',
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
    'https://images.unsplash.com/photo-1582719462645-4e0f5f189272',
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
    'https://images.unsplash.com/photo-1601105079732-8b55c9ec7e62',
    25,
    ['1 shot of espresso', 'Steamed milk', 'Chocolate syrup', 'Whipped cream'],
    ['Brew espresso, steam the milk, mix with chocolate syrup, top with whipped cream'],
    false,
    true,
    false,
    false
  ),
];

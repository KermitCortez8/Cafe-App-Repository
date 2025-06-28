import { Coffee } from '../models/coffeeModel';

// URL genérica para todas las imágenes de café
const defaultCoffeeImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7ZiBdtfs7cECjbvnl5S4-A9YY8A921vVOw&s';

export const categories = [
  { id: '1', name: 'Cappuccino' },
  { id: '2', name: 'Macchiato' },
  { id: '3', name: 'Latte' },
  { id: '4', name: 'Decaf' }
];

export const coffees = [
  new Coffee('c1', 'Cappuccino Classic', 45.13, defaultCoffeeImage, '1'),
  new Coffee('c2', 'Cappuccino Choco',   64.53, defaultCoffeeImage, '1'),
  new Coffee('c3', 'Macchiato Classic',  75.50, defaultCoffeeImage, '2'),
  new Coffee('c4', 'Macchiato Vanilla',  75.50, defaultCoffeeImage, '2')
];

export const assets = {
  delivery: 'https://example.com/images/delivery.png'
};
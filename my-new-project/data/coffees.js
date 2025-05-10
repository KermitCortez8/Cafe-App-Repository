// src/data/coffees.js
import Meal from "../models/meal";

export const MEALS = [
  // c1 - Espresso
  new Meal(
    'm1',
    ['c1'],
    'Espresso',   
    2.99,         
    'simple',
    'https://s3.ppllstatics.com/diariovasco/www/multimedia/2024/11/13/espresso-RrCckvN0LEAFk54KAQQPcXM-1200x840@Diario%20Vasco.jpg',
    10,
    ['Café molido 100% arábica', 'Agua caliente (a 90–96 °C)'], // Español (Briceño)
    ['Un clásico intenso y lleno de carácter. Nuestro Espresso está preparado con granos 100% arábica, recién molidos y extraídos al instante para lograr un sabor profundo, con notas tostadas y una suave capa de crema. Ideal para los amantes del café fuerte y auténtico.'], // Descripción en español (Briceño)
    true,
    true,
    true,
    false
  ),

  // c2 - Latte
  new Meal(
    'm3',
    ['c2'],
    'Classic Latte',  // En inglés (Burga)
    3.50,           // Precio numérico (en lugar de '$3.50')
    'simple',
    'https://staresso.com/cdn/shop/articles/What_is_a_latte.jpg?v=1716606481',
    20,
    ['Café espresso 100% arábica', 'Leche vaporizada', 'Una fina capa de espuma de leche'], // Español (Briceño)
    ['Suave, cremoso y reconfortante. Nuestro Latte Clásico combina un espresso 100% arábica con abundante leche vaporizada y una delicada capa de espuma. Perfecto para quienes disfrutan de un café balanceado, con notas tostadas suavizadas por la cremosidad de la leche.'], // Descripción en español (Briceño)
    false,
    true,
    false,
    false
  ),

  // c3 - Cappuccino
  new Meal(
    'm5',
    ['c3'],
    'Cappuccino',  // En inglés (Burga)
    3.99,          // Precio numérico (en lugar de '$3.99')
    'medium',
    'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino',
    20,
    ['1 o 2 shots de espresso 100% arábica', 'Leche vaporizada', 'Espuma de leche cremosa'], // Español (Briceño)
    ['El Capuccino Clásico es la mezcla perfecta de espresso fuerte, leche vaporizada y espuma cremosa. Esta bebida ofrece un equilibrio ideal entre el sabor intenso del café y la suavidad de la leche, coronada con una capa ligera de espuma.'], // Descripción en español (Briceño)
    false,
    true,
    false,
    false
  ),

  // c4 - Iced Coffees
  new Meal(
    'm7',
    ['c4'],
    'Iced Coffee',  // En inglés (Burga)
    3.49,          // Precio numérico (en lugar de '$3.49')
    'simple',
    'https://frostingandfettuccine.com/wp-content/uploads/2022/12/Instant-Iced-Coffee-5-1.jpg',
    15,
    ['Café frío', 'Hielo'],  // Español (Briceño)
    ['El Café Helado es la bebida perfecta para disfrutar del intenso sabor del espresso combinado con la frescura del hielo. Ideal para los días calurosos, puedes elegir entre leche fría o leche condensada para darle un toque cremoso, y decorarlo con cacao o canela si te gusta un toque extra de sabor.'],  // Descripción en español (Briceño)
    false,
    true,
    true,
    false
  ),

  // c5 - Macchiato
  new Meal(
    'm9',
    ['c5'],
    'Caramel Macchiato',  // En inglés (Burga)
    4.00,           // Precio numérico (en lugar de '$4.00')
    'medium',
    'https://www.recetasderechupete.com/wp-content/uploads/2022/01/Expresso-macchiato-1200x828.jpg',
    20,
    ['1 taza de café espresso', '200 ml de leche (puede ser leche entera, descremada o leche vegetal)', '2 cucharaditas de sirope de vainilla', 'Sirope de caramelo al gusto', 'Hielo (opcional para versión fría)', 'Espuma de leche (opcional)'],  // Español (Briceño)
    ['El Caramel Macchiato es una deliciosa bebida que combina la suavidad de la leche con el sabor fuerte del espresso, al que se le agrega un toque dulce de sirope de vainilla y caramelo. Ideal para los amantes del café con un toque dulce y suave, el Caramel Macchiato se ha convertido en una de las bebidas más populares de las cafeterías.'], // Descripción en español (Briceño)
    false,
    true,
    false,
    false
  ),
  
  // c6 - Mocha
  new Meal(
    'm10',
    ['c6'],
    'Mocha',  // En inglés (Burga)
    4.50,           // Precio numérico (en lugar de '$4.50')
    'medium',
    'https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/6330/image-thumb__6330__schema_image/CafeMocha-hero.61028a28.jpg',
    25,
    ['1 taza de café espresso', '200 ml de leche (puede ser leche entera, descremada o leche vegetal)', '2 cucharadas de sirope de chocolate', '1 cucharadita de azúcar (opcional)', 'Crema batida (opcional)', 'Sirope de chocolate (para decorar, opcional)'],  // Español (Briceño)
    ['El Café Mocha es una deliciosa fusión entre el café y el chocolate, creando una bebida rica y suave que ofrece lo mejor de ambos mundos. Con el sabor profundo del espresso, combinado con la dulzura del sirope de chocolate y la suavidad de la leche, el Mocha es perfecto para aquellos que buscan una experiencia indulgente y reconfortante.'],  // Descripción en español (Briceño)
    false,
    true,
    false,
    false
  ),
];

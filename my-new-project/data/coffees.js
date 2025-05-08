// src/data/coffees.js
import Meal from "../models/meal";

export const MEALS = [
  // c1 - Espresso
  new Meal(
    'm1',
    ['c1'],
    'Expresso',
    '2.99',

    'https://s3.ppllstatics.com/diariovasco/www/multimedia/2024/11/13/espresso-RrCckvN0LEAFk54KAQQPcXM-1200x840@Diario%20Vasco.jpg ',
    8,
    ['Café molido 100% arábica', 
      'Agua caliente (a 90–96 °C)'],
    ['Un clásico intenso y lleno de carácter. Nuestro Espresso está preparado con granos 100% arábica, recién molidos y extraídos al instante para lograr un sabor profundo, con notas tostadas y una suave capa de crema. Ideal para los amantes del café fuerte y auténtico.'],

    false
  ),

  new Meal(
    'm2',           
    ['c1'],
    'Doble Expresso',
    '3.49',

    'https://lemongrassdeli.com/cdn/shop/products/Espresso_SQ_0dbe9837-380c-4504-9d5a-741440803119.jpg?v=1586498076',
    9
    ['Doble dosis de café molido 100% arábica',
     'Agua caliente (a 90–96 °C)'],
    
    ['Doble intensidad, doble sabor. Nuestro Doble Espresso se elabora con una carga extra de café 100% arábica, recién molido y extraído en el momento para ofrecer un cuerpo robusto, notas intensas y una capa cremosa más pronunciada. Ideal para quienes buscan un golpe de energía con el sabor profundo del café auténtico.'],

    false
  ),



  // c2 - Latte
  new Meal(
    'm3',
    ['c2'],
    'Latte Clasico',
    '3.50',

    'https://staresso.com/cdn/shop/articles/What_is_a_latte.jpg?v=1716606481',
    12,

    [
      'Café espresso 100% arábica',
      'Leche vaporizada',
      'Una fina capa de espuma de leche'
    ],
    
    ['Suave, cremoso y reconfortante. Nuestro Latte Clásico combina un espresso 100% arábica con abundante leche vaporizada y una delicada capa de espuma. Perfecto para quienes disfrutan de un café balanceado, con notas tostadas suavizadas por la cremosidad de la leche.'],

    false
  ),


  new Meal(
    'm4',
    ['c2'],
    'Vanilla Latte',
    '3.75',

    'https://images.ctfassets.net/v601h1fyjgba/7wGcWZgV7yaSLXrodALIuw/2496353e1ec8c39dd44adfb45e8335d3/Vanilla_Latte.jpg',
    12,
    [
      '1 o 2 shots de espresso 100% arábica',
      'Leche vaporizada',
      'Jarabe de vainilla natural'
    ],
    
    ['Dulce, aromático y perfectamente equilibrado. Nuestro Latte de Vainilla está hecho con espresso 100% arábica, leche vaporizada y un toque de jarabe de vainilla natural. Una experiencia cremosa con notas suaves y un final delicadamente dulce, ideal para acompañar cualquier momento del día.'],

    false
  ),




  // c3 - Cappuccino
  new Meal(
    'm5',
    ['c3'],
    'Cappuccino',
    '3.99',
    'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino',
    8,
    ['1 o 2 shots de espresso 100% arábica',
     'Leche vaporizada',
     'Espuma de leche cremosa'
    ],
    ['El Capuccino Clásico es la mezcla perfecta de espresso fuerte, leche vaporizada y espuma cremosa. Esta bebida ofrece un equilibrio ideal entre el sabor intenso del café y la suavidad de la leche, coronada con una capa ligera de espuma.'],
    false
  ),



  new Meal(
    'm6',
    ['c3'],
    'Iced Cappuccino',
    '4.25',

    'https://images.ctfassets.net/v601h1fyjgba/1eje3eJjFrd8FkYxT2jniv/1bd8c902f5e48d95fdd3183c9993ed04/Lite_Iced_Cappuccino_Hi__1_.jpg',
    7,
    ['1 o 2 shots de espresso 100% arábica',
     'Leche fría',
     'Hielo',
     'Espuma de leche fría',
    'Sirope de azúcar o sabor (opcional)'],

    ['El Capuccino Helado es una opción refrescante que combina el sabor intenso del espresso con leche fría y hielo, creando una bebida perfecta para los días calurosos. La espuma de leche fría completa la experiencia, mientras que un toque de sirope de azúcar o sabor opcional puede añadir un toque dulce. Ideal para quienes buscan un café con un giro refrescante.'],

    false
  ),



  // c4 - Iced Coffees
  new Meal(
    'm7',
    ['c4'],
    'Iced Coffee',
    '3.49',

    'https://frostingandfettuccine.com/wp-content/uploads/2022/12/Instant-Iced-Coffee-5-1.jpg ',
    9,
    [
      '1 o 2 shots de espresso 100% arábica',
      'Leche fría o leche condensada',
      'Hielo',
      'Sirope de azúcar o endulzante (opcional)',
      'Cacao en polvo o canela (opcional para decorar)'
    ],

    ['El Café Helado es la bebida perfecta para disfrutar del intenso sabor del espresso combinado con la frescura del hielo. Ideal para los días calurosos, puedes elegir entre leche fría o leche condensada para darle un toque cremoso, y decorarlo con cacao o canela si te gusta un toque extra de sabor'],

    false
  ),

  new Meal(
    'm8',
    ['c4'],
    'Iced Mocha',
    '3.99',
    'https://images.unsplash.com/photo-1593642532873-e3e1d8bb4fa5',
    9,
    [ '1 taza de café espresso o café fuerte',
      '1 bola de helado de vainilla',
      '1 bola de helado de chocolate',
      '1 cucharadita de cacao en polvo',
      'Leche o crema al gusto',
      'Sirope de chocolate',
      'Hielo triturado (opcional)'],
    ['El Helado Moca es una deliciosa combinación de café espresso, helado cremoso de chocolate y vainilla, con un toque de cacao en polvo y sirope de chocolate. Ideal para los amantes del café que disfrutan de un toque dulce y refrescante.'],
    false
  ),


  // c5 - Macchiato
  new Meal(
    'm9',
    ['c5'],
    'Caramel Macchiato',
    '4.00',

    'https://www.recetasderechupete.com/wp-content/uploads/2022/01/Expresso-macchiato-1200x828.jpg ',
    8,

    ['1 taza de café espresso',
     '200 ml de leche (puede ser leche entera, descremada o leche vegetal)',
     '2 cucharaditas de sirope de vainilla',
     'Sirope de caramelo al gusto',
     'Hielo (opcional para versión fría)',
     'Espuma de leche (opcional)'],

    ['El Caramel Macchiato es una deliciosa bebida que combina la suavidad de la leche con el sabor fuerte del espresso, al que se le agrega un toque dulce de sirope de vainilla y caramelo. Ideal para los amantes del café con un toque dulce y suave, el Caramel Macchiato se ha convertido en una de las bebidas más populares de las cafeterías.'],
    false
  ),
  


  // c6 - Mocha
  new Meal(
    'm10',
    ['c6'],
    'Mocha',
    '4.50',
    'https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/6330/image-thumb__6330__schema_image/CafeMocha-hero.61028a28.jpg',
    10,
    ['1 taza de café espresso',
     '200 ml de leche (puede ser leche entera, descremada o leche vegetal)',
     '2 cucharadas de sirope de chocolate',
     '1 cucharadita de azúcar (opcional)',
     'Crema batida (opcional)',
     'Sirope de chocolate (para decorar, opcional)'],

    ['El Café Mocha es una deliciosa fusión entre el café y el chocolate, creando una bebida rica y suave que ofrece lo mejor de ambos mundos. Con el sabor profundo del espresso, combinado con la dulzura del sirope de chocolate y la suavidad de la leche, el Mocha es perfecto para aquellos que buscan una experiencia indulgente y reconfortante.'],

    false
  ),
];

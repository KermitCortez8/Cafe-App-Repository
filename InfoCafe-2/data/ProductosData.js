const CoffeeData = [
  {
    id: 'C1',
    name: 'Classic Americano',
    category: 'Americano',
    description: `A smooth espresso diluted with hot water, the Americano offers a lighter take on traditional espresso. Ideal for those who enjoy a rich, yet mellow coffee experience.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://isamantillablog.wordpress.com/wp-content/uploads/2021/03/cafe_americano.jpg?w=1400' },
    ingredients: 'Espresso, Water',
    prices: [
      { size: 'S', price: '2.10', currency: 'S/.' },
      { size: 'M', price: '2.80', currency: 'S/.' },
      { size: 'L', price: '3.60', currency: 'S/.' },
    ],
    average_rating: 4.5,
  },
  {
    id: 'C2',
    name: 'Iced Americano',
    category: 'Americano',
    description: `Refreshing and bold, this iced version of the classic Americano is perfect for warm days. Served over ice with a shot of espresso.`,
    roasted: 'Dark Roasted',
    image: { uri: 'https://www.tasteofhome.com/wp-content/uploads/2024/02/Copycat-McDonald-s-Iced-Coffee_EXPS_FT23_273351_ST_3_27_1.jpg' },
    ingredients: 'Espresso, Ice, Water',
    prices: [
      { size: 'S', price: '2.50', currency: 'S/.' },
      { size: 'M', price: '3.10', currency: 'S/.' },
      { size: 'L', price: '3.90', currency: 'S/.' },
    ],
    average_rating: 4.6,
  },
  {
    id: 'C3',
    name: 'Creamy Americano',
    category: 'Americano',
    description: `A delicious twist on the original, this Americano is finished with a splash of steamed milk for a creamy texture.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://thumbs.dreamstime.com/b/relax-cafe-coffee-shop-drinking-best-here-barista-perfect-morning-americano-espresso-fresh-milk-cream-froth-five-129743460.jpg' },
    ingredients: 'Espresso, Water, Milk',
    prices: [
      { size: 'S', price: '2.75', currency: 'S/.' },
      { size: 'M', price: '3.45', currency: 'S/.' },
      { size: 'L', price: '4.20', currency: 'S/.' },
    ],
    average_rating: 4.7,
  },
  {
    id: 'C4',
    name: 'House Black Coffee',
    category: 'Black',
    description: `Brewed to perfection, this traditional black coffee is strong, bold, and full-bodied — a true classic with no add-ins.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://tb-static.uber.com/prod/image-proc/processed_images/00ea0dd7bc207e02c344fe08d90259fd/a19bb09692310dfd41e49a96c424b3a6.jpeg' },
    ingredients: 'Ground Coffee, Water',
    prices: [
      { size: 'S', price: '1.95', currency: 'S/.' },
      { size: 'M', price: '2.40', currency: 'S/.' },
      { size: 'L', price: '3.20', currency: 'S/.' },
    ],
    average_rating: 4.3,
  },
  {
    id: 'C5',
    name: 'Pour-Over Black',
    category: 'Black',
    description: `This pour-over brew delivers clarity and brightness in every sip. A great choice for those who appreciate the flavor of single-origin beans.`,
    roasted: 'Light Roasted',
    image: { uri: 'https://thegoldenbrewing.com.au/cdn/shop/products/VDC-02W-00.jpg?v=1634796445' },
    ingredients: 'Ground Coffee, Water',
    prices: [
      { size: 'S', price: '2.20', currency: 'S/.' },
      { size: 'M', price: '2.90', currency: 'S/.' },
      { size: 'L', price: '3.50', currency: 'S/.' },
    ],
    average_rating: 4.6,
  },
  {
    id: 'C6',
    name: 'French Press Bold',
    category: 'Black',
    description: `Rich and full-bodied, this French Press black coffee highlights deep flavors and a strong aroma. Best enjoyed without any additives.`,
    roasted: 'Dark Roasted',
    image: { uri: 'https://images.squarespace-cdn.com/content/v1/5f809a7f96d54f4cc676d880/1606942208846-7DMWCZWFHEQOTN4X8CBX/image-asset.jpeg' },
    ingredients: 'Ground Coffee, Water',
    prices: [
      { size: 'S', price: '2.35', currency: 'S/.' },
      { size: 'M', price: '3.00', currency: 'S/.' },
      { size: 'L', price: '3.75', currency: 'S/.' },
    ],
    average_rating: 4.8,
  },
  {
    id: 'C7',
    name: 'Classic Cappuccino',
    category: 'Cappuccino',
    description: `A perfect balance of espresso, steamed milk, and frothy foam. Rich in flavor with a velvety texture.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Cappuccino_PeB.jpg' },
    ingredients: 'Espresso, Steamed Milk, Foam',
    prices: [
      { size: 'S', price: '2.90', currency: 'S/.' },
      { size: 'M', price: '3.50', currency: 'S/.' },
      { size: 'L', price: '4.10', currency: 'S/.' },
    ],
    average_rating: 4.6,
  },


  {
    id: 'C8',
    name: 'Caramel Macchiato',
    category: 'Macchiato',
    description: `Espresso layered with steamed milk and topped with vanilla and rich caramel drizzle. A sweet and creamy treat.`,
    roasted: 'Dark Roasted',
    image: { uri: 'https://www.nescafe.com/ph/sites/default/files/2024-05/nescafe-gold-Caramel-Macchiato-recipe-banner-1066x1066.jpg' },
    ingredients: 'Espresso, Steamed Milk, Vanilla, Caramel',
    prices: [
      { size: 'S', price: '3.10', currency: 'S/.' },
      { size: 'M', price: '3.80', currency: 'S/.' },
      { size: 'L', price: '4.50', currency: 'S/.' },
    ],
    average_rating: 4.7,
  },
  {
    id: 'C9',
    name: 'Vanilla Latte',
    category: 'Latte',
    description: `Smooth espresso combined with steamed milk and vanilla syrup. Comforting and creamy with a hint of sweetness.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://images.ctfassets.net/v601h1fyjgba/7wGcWZgV7yaSLXrodALIuw/2496353e1ec8c39dd44adfb45e8335d3/Vanilla_Latte.jpg' },
    ingredients: 'Espresso, Steamed Milk, Vanilla Syrup',
    prices: [
      { size: 'S', price: '3.00', currency: 'S/.' },
      { size: 'M', price: '3.70', currency: 'S/.' },
      { size: 'L', price: '4.40', currency: 'S/.' },
    ],
    average_rating: 4.6,
  },
  {
    id: 'C10',
    name: 'Decaf House Blend',
    category: 'Decaf',
    description: `All the rich flavor of our house blend, without the caffeine. A mellow option for any time of day.`,
    roasted: 'Light Roasted',
    image: { uri: 'https://target.scene7.com/is/image/Target/GUEST_3db36a43-a712-4137-a5e2-1655730cb773' },
    ingredients: 'Decaf Ground Coffee, Water',
    prices: [
      { size: 'S', price: '2.20', currency: 'S/.' },
      { size: 'M', price: '2.80', currency: 'S/.' },
      { size: 'L', price: '3.40', currency: 'S/.' },
    ],
    average_rating: 4.4,
  },
  {
    id: 'C11',
    name: 'Pure Espresso Shot',
    category: 'Espresso', // Nueva categoría
    description: `A potent and aromatic shot of finely brewed coffee, the foundation of many coffee beverages. Rich and intense.`,
    roasted: 'Dark Roasted',
    image: { uri: 'https://media.istockphoto.com/id/157509191/photo/double-espresso-shot.jpg?s=612x612&w=0&k=20&c=HOOwVH_kMb8iRAGDFAc6b7tG3ENQZh6bbXt0Doo78zc=' }, // Placeholder image
    ingredients: 'Finely Ground Coffee, Hot Water',
    prices: [
      { size: 'S', price: '2.00', currency: 'S/.' }, 
      { size: 'M', price: '2.50', currency: 'S/.' }, // Double shot
      { size: 'L', price: '3.00', currency: 'S/.' }, // Triple shot
    ],
    average_rating: 4.9,
  },
  {
    id: 'C12',
    name: 'Classic Flat White',
    category: 'Flat White', // Nueva categoría
    description: `A velvety coffee made with a shot of espresso and steamed milk, creating a smooth and creamy texture with minimal foam.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg' }, // Placeholder image
    ingredients: 'Espresso, Steamed Milk',
    prices: [
      { size: 'S', price: '3.20', currency: 'S/.' },
      { size: 'M', price: '3.90', currency: 'S/.' },
      { size: 'L', price: '4.60', currency: 'S/.' },
    ],
    average_rating: 4.8,
  },
  {
    id: 'C13',
    name: 'Original Cold Brew',
    category: 'Cold Brew', // Nueva categoría
    description: `Slow-steeped for 12 hours, our cold brew delivers a smooth, low-acid coffee concentrate perfect for a refreshing pick-me-up.`,
    roasted: 'Medium Roasted',
    image: { uri: 'https://wellnessforthewin.com/wp-content/uploads/2020/03/IMG_4320-400x400.jpg' }, // Placeholder image
    ingredients: 'Coarsely Ground Coffee, Cold Water',
    prices: [
      { size: 'S', price: '3.50', currency: 'S/.' },
      { size: 'M', price: '4.20', currency: 'S/.' },
      { size: 'L', price: '4.90', currency: 'S/.' },
    ],
    average_rating: 4.7,
  },
];

export default CoffeeData;
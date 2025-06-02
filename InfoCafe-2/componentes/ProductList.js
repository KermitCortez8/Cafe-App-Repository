import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from '../componentes/ProductoCard';

const products = [
  {
    id: '1',
    name: 'Cappuccino',
    variant: 'Classic',
    price: 'S/. 11.00',
    rating: 4.8,
    image: { uri: 'https://recetafamiliar.com/wp-content/uploads/2024/05/Receta-del-Clasico-Capuccino-Italiano-1024x576.jpg' },
  },
  {
    id: '2',
    name: 'Cappuccino',
    variant: 'Chiaro',
    price: 'S/. 14.50',
    rating: 5.0,
    image: { uri: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Cappuccino-OL.jpg' },
  },
  // agrega más si quieres
];

export default function ProductList() {
  return (
    <View style={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
});

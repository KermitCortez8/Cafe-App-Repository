// componentes/ProductList.js (VERSIÓN CON SOLUCIÓN DEFINITIVA)
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from '../../InfoCafe-2/componentes/ProductoCard'; // Asegúrate de que esta ruta sea correcta

export default function ProductList({ coffeeData, selectedCategory }) {
  const filteredData = selectedCategory === 'All'
    ? coffeeData
    : coffeeData.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.grid}>
      {filteredData.map((product) => (
        <ProductCard
          key={product.id}
          product={product} 

        />
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
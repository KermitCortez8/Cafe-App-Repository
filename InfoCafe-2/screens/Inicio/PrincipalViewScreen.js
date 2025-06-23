import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import DecorativeBackground from '../../componentes/PantallaLayout';
import SearchBar from '../../componentes/SearchBar';
import PromoBanner from '../../componentes/PromoBanner';
import CategoryList from '../../componentes/CategoryList';
import ProductList from '../../componentes/ProductList';
import CoffeeData from '../../data/ProductosData';
import HeaderPerso from '../../componentes/HeaderPerso';

export default function PrincipalViewScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState(CoffeeData);

  return (
    <DecorativeBackground>
      {/* Encabezado siempre visible */}
      <HeaderPerso />

      {/* Contenido estático */}
      <View style={styles.staticContainer}>
        <SearchBar onSearchResults={setSearchResults} />
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>

      {/* Solo la lista de productos es desplazable */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.productListContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProductList
          coffeeData={searchResults}
          selectedCategory={selectedCategory}
        />
      </ScrollView>
    </DecorativeBackground>
  );
}

const styles = StyleSheet.create({
  staticContainer: {
    padding: 16,
    // Aquí puedes agregar estilos adicionales para el área estática.
  },
  scrollContainer: {
    flex: 1, // Asegura que el ScrollView ocupe el espacio restante
  },
  productListContainer: {
    padding: 16,
    // Puedes ajustar este padding según necesites para ProductList.
  },
});

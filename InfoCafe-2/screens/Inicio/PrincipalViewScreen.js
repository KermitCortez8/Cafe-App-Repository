import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DecorativeBackground from '../../componentes/PantallaLayout';
import SearchBar from '../../componentes/SearchBar';
import PromoBanner from '../../componentes/PromoBanner';
import CategoryList from '../../componentes/CategoryList';
import ProductList from '../../componentes/ProductList';
import CoffeeData from '../../data/ProductosData';

export default function PrincipalViewScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchResults, setSearchResults] = useState(CoffeeData);

  return (
    <DecorativeBackground>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Se pasa la función setSearchResults a SearchBar para recibir el filtrado */}
        <SearchBar onSearchResults={setSearchResults} />
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        {/* En ProductList se usará la data filtrada por búsqueda */}
        <ProductList
          coffeeData={searchResults}
          selectedCategory={selectedCategory}
        />
      </ScrollView>
    </DecorativeBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

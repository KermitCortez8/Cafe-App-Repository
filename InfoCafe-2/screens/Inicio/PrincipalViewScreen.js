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

  return (
    <DecorativeBackground>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <PromoBanner />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList
          coffeeData={CoffeeData}
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

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DecorativeBackground from '../../componentes/PantallaLayout';
import SearchBar from '../../componentes/SearchBar';
import PromoBanner from '../../componentes/PromoBanner';
import CategoryList from '../../componentes/CategoryList';
import ProductList from '../../componentes/ProductList';

export default function PrincipalViewScreen() {
  return (
    <DecorativeBackground>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <PromoBanner />
        <CategoryList />
        <ProductList />
      </ScrollView>
    </DecorativeBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

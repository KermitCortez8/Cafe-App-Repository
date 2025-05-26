import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PromoCarousel from '../../components/PromoCarrusel';
import CategorySlider from '../../components/CategoriesSliders';
import ProductCard from '../../components/ProductoCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
        <PromoCarousel />
        <CategorySlider />
        <View style={styles.productsContainer}>
          <ProductCard
            image="https://upload.wikimedia.org/wikipedia/commons/7/70/Cappuccino_in_original.jpg"
            name="Cappuccino"
            type="Classic"
            price="45.13"
            rating={4.8}
          />
          <ProductCard
            image="https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw30047d66/images/recipe-Images/cappuccino1-recipe.jpg?sw=1200&sh=1200&sm=fit"
            name="Cappuccino"
            type="Classic"
            price="45.13"
            rating={4.8}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E1',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 16,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MEALS } from '../data/coffees';
import MealList from '../components/MealList';
import Subtitle from '../components/Subtitle';

export default function CoffeeOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const meals = MEALS.filter(m => m.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <Subtitle text="Coffees in this Category" />
      <MealList data={meals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f3f3', padding: 16 },
});

// CoffeeOverviewScreen.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MEALS } from '../data/coffees';
import MealList from '../components/MealList';
import Subtitle from '../components/Subtitle';

export default function CoffeeOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params; // Get categoryId passed from previous screen
  const meals = MEALS.filter(m => m.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <Subtitle text="Coffees in this Category" />
      <MealList
        data={meals}
        onPressMeal={(coffeeId) => {
          navigation.navigate('CoffeeDetails', { coffeeId: coffeeId }); // Navigate to details screen
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f3f3', padding: 16 },
});

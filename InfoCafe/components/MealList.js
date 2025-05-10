// MealList.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem'; // Asegúrate de que la ruta sea correcta

export default function MealList({ data, onPressMeal }) {
  return (
    <View style={styles.listContainer}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onPressMeal(item.id)}
          activeOpacity={0.7}
        >
          <MealItem
            name={item.name}
            price={`$${item.price}`}
            imageUrl={item.imageUrl}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

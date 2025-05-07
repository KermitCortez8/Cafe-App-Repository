// MealList.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MealList({ data, onPressMeal }) {
  return (
    <View>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.mealItem}
          onPress={() => onPressMeal(item.id)}  // Trigger navigation when clicked
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{`$${item.price}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
  },
});

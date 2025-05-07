// src/components/CategoryGridItem.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryGridItem = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}                      // <-- aquí
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryGridItem;

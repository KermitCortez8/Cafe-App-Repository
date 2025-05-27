import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const categories = ['Cappuccino', 'Macchiato', 'Latte', 'Decaf'];

export default function CategorySlider() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={index === 0 ? styles.activeButton : styles.button}>
          <Text style={index === 0 ? styles.activeText : styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#4E1F00',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  text: {
    color: '#333',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

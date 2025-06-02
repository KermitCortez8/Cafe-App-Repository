import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Cappuccino', 'Macchiato', 'Latte', 'Decaf'];

export default function CategoryList() {
  const [selected, setSelected] = useState('Cappuccino');

  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setSelected(cat)}
          style={[
            styles.chip,
            selected === cat && styles.selectedChip,
          ]}
        >
          <Text style={[
            styles.chipText,
            selected === cat && styles.selectedText,
          ]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selectedChip: {
    backgroundColor: '#4E1F00',
  },
  chipText: {
    color: '#333',
    fontSize: 14,
  },
  selectedText: {
    color: '#fff',
  },
});

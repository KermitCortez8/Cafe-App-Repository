// components/SizeSelector.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SizeSelector({ selectedSize, onSelect }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Tamaño</Text>
      <View style={styles.sizeContainer}>
        {['S', 'M', 'L'].map((size) => (
          <TouchableOpacity
            key={size}
            style={[styles.sizeBox, selectedSize === size && styles.sizeBoxSelected]}
            onPress={() => onSelect(size)}
          >
            <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextSelected]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
    marginBottom: 24,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 12,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeBoxSelected: {
    backgroundColor: '#4E1F00',
    borderColor: '#4E1F00',
  },
  sizeText: {
    fontSize: 18,
    color: '#333',
  },
  sizeTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

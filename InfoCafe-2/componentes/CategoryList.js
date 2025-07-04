import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = ['All', 'Americano', 'Black', 'Cappuccino', 'Macchiato', 'Latte', 'Decaf', 'Espresso', 'Cold Brew', 'Flat White'];

export default function CategoryList({ selectedCategory, onSelectCategory }) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
      testID="category-scroll" // ← ScrollView principal
    >
      <View style={styles.container} testID="category-container">
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => onSelectCategory(cat)}
            style={[
              styles.chip,
              selectedCategory === cat && styles.selectedChip,
            ]}
            testID={`category-${cat}`} // ← testID individual para cada categoría
          >
            <Text
              style={[
                styles.chipText,
                selectedCategory === cat && styles.selectedText,
              ]}
              testID={`category-text-${cat}`} // ← opcional: para probar solo el texto
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 16, // Agrega un padding horizontal para que los chips no se peguen a los bordes
    paddingVertical: 8, // Opcional: padding vertical para separar del contenido superior/inferior
  },
  container: {
    flexDirection: 'row',
    gap: 8, 

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
    // Asegura que el texto no se rompa en varias líneas
    whiteSpace: 'nowrap', // Esto no es una prop de RN, pero el efecto es que el texto se mantiene en una línea.
    // En RN, simplemente no wrapping es el comportamiento predeterminado en Text a menos que uses flexWrap.
  },
  selectedText: {
    color: '#fff',
  },
});
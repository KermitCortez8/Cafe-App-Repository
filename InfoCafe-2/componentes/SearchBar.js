// SearchBar.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoffeeData from '../../InfoCafe-2/data/ProductosData'; // Asegúrate de que la ruta sea correcta

export default function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState('');
  const [filteredCafes, setFilteredCafes] = useState(CoffeeData);

  // Filtra la data cada vez que cambia el query
  useEffect(() => {
    const results =
      query.trim() === ''
        ? CoffeeData
        : CoffeeData.filter((cafe) =>
            cafe.name.toLowerCase().includes(query.toLowerCase())
          );
    setFilteredCafes(results);
    // Envía los resultados filtrados usando 'results' en lugar de 'filteredCafes'
    if (onSearchResults) {
      onSearchResults(results);
    }
  }, [query]);

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        placeholder="Buscar Café"
        placeholderTextColor="#888"
        style={styles.input}
        value={query}
        onChangeText={setQuery} // Actualiza el estado query mientras se escribe
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

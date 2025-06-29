// componentes/Header.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ onBack, title = 'Detalle', product, addToFavorites, removeFromFavorites }) {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false); // Estado para el corazón

  useEffect(() => {
    // Inicializamos si el producto está en favoritos o no
    if (product) {
      setIsFavorite(product.isFavorite);
    }
  }, [product]);

  // Manejar el cambio de favorito
  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id); // Si ya está en favoritos, lo eliminamos
    } else {
      addToFavorites(product); // Si no está en favoritos, lo agregamos
    }
    setIsFavorite(!isFavorite); // Alternar el estado del corazón
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack ?? (() => navigation.goBack())}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={handleFavorite}>
        <Ionicons 
          name={isFavorite ? "heart" : "heart-outline"} 
          size={24} 
          color={isFavorite ? "red" : "#fff"} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4E1F00',
    paddingTop: 75,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
});



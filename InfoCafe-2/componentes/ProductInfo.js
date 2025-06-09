// componentes/ProductInfo.js (VERSIÓN FINAL CON roasted, SIN ICONOS Y SIN ratings_count)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductInfo({ name, roasted, average_rating }) { // ¡Props actualizadas!
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      {/* Mostrar 'roasted' como el subtítulo */}
      {roasted && <Text style={styles.variant}>{roasted}</Text>}

      <View style={styles.ratingRow}>
        {/* Sección de Rating (solo estrella y número, sin conteo) */}
        {average_rating != null && (
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>
              {average_rating} {/* ¡Ya no mostramos ratings_count aquí! */}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  variant: { // Este estilo es para el texto 'roasted' (ej. "Medium Roasted" o "Chiaro")
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    color: '#444',
    fontSize: 16,
  },
});
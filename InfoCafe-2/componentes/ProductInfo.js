import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductInfo({ name, variant, rating }) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.variant}>{variant}</Text>
      <View style={styles.row}>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>{rating} (230)</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  variant: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    color: '#444',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
});
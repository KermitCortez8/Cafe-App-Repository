import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate('DetallesCafe', { product });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={goToDetails}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.rating}>
        <Ionicons name="star" size={14} color="gold" />
        <Text style={styles.ratingText}>{product.rating}</Text>
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.variant}>{product.variant}</Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FAFAF8',
    borderRadius: 16,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4E1F00',
  },
  variant: {
    fontSize: 12,
    color: '#777',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4E1F00',
  },
  addBtn: {
    backgroundColor: '#4E1F00',
    borderRadius: 20,
    padding: 6,
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate('Inicio', {
    screen: 'Details',
    params: { product },
  });
  };
  // Función para renderizar el precio mínimo a partir de objetos en product.prices
  const renderMinimumPrice = () => {
    if (product.prices && Array.isArray(product.prices) && product.prices.length > 0) {
      // Extraemos y convertimos la propiedad "price" de cada objeto a número.
      const numericPrices = product.prices
        .map(item => parseFloat(item.price))
        .filter(price => !isNaN(price));
      
      if (numericPrices.length === 0) {
        return <Text style={styles.fromPrice}>Precio no disponible</Text>;
      }
      
      const minPrice = Math.min(...numericPrices);
      // Usamos la moneda del primer elemento como referencia; se asume que todas tienen la misma moneda.
      const currency = product.prices[0].currency || 'S/.';
      
      return (
        <Text style={styles.fromPrice}>
          Desde: {currency} {minPrice.toFixed(2)}
        </Text>
      );
    }
    return <Text style={styles.fromPrice}>Precio no disponible</Text>;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={goToDetails}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.rating}>
        <Ionicons name="star" size={14} color="gold" />
        <Text style={styles.ratingText}>{product.average_rating}</Text>
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.roasted}>{product.roasted}</Text>
      <View style={styles.bottom}>
        {product.price && (
          <Text style={styles.price}>
            S/. {parseFloat(product.price).toFixed(2)}
          </Text>
        )}
        {renderMinimumPrice()}
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
    marginVertical: 8,
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
    fontSize: 14,
    color: '#333',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4E1F00',
  },
  roasted: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
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
  fromPrice: {
    fontSize: 15,
    color: '#333',
  },
});

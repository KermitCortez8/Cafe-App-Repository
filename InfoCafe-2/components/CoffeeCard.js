// CoffeeCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function CoffeeCard({ coffee, onPress }) {
  const navigation = useNavigation();

  // Fuente de imagen válida para React Native
  const imageSource = typeof coffee.imageUrl === 'string' ? { uri: coffee.imageUrl } : coffee.imageUrl;

  // Handler para el onPress, prioriza la prop, sino navega a detalle
  const handlePress = () => {
    if (onPress) {
      onPress(coffee);
    } else {
      navigation.navigate('ProductDetail', { product: coffee });
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {/* Mostrar rating si existe */}
      {typeof coffee.rating === 'number' && (
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{coffee.rating.toFixed(1)}</Text>
        </View>
      )}

      {/* Cargar la imagen desde la URL proporcionada */}
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{coffee.name}</Text>
      
      {/* Mostrar tipo si existe */}
      {coffee.type && <Text style={styles.type}>{coffee.type}</Text>}

      <View style={styles.footer}>
        <Text style={styles.price}>₱ {typeof coffee.price === 'number' ? coffee.price.toFixed(2) : coffee.price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => { /* acción añadir al carrito */ }}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    margin: 8,
    width: 160,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  ratingText: {
    marginLeft: 4,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  type: {
    color: 'gray',
    fontSize: 12,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4E1F00',
    borderRadius: 20,
    padding: 4,
  },
});

export default CoffeeCard;

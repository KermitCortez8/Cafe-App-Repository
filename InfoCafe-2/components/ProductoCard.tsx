import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export interface Product {
  image: string | number;
  name: string;
  type: string;
  price: string;
  rating: number;
}

export default function ProductCard({ image, name, type, price, rating }: Product) {
  const navigation = useNavigation<any>();
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  const handlePress = () => {
    navigation.navigate('ProductDetail', {
      product: { image, name, type, price, rating },
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.rating}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>₱ {price}</Text>
        <TouchableOpacity style={styles.addButton}>
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

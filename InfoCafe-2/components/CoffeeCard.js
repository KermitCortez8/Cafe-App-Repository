import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
export function CoffeeCard({ coffee, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(coffee)}>
      <Image source={{ uri: coffee.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{coffee.name}</Text>
      <Text style={styles.price}>₱ {coffee.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 8, alignItems: 'center', margin: 8, flex: 1 },
  image: { width: 80, height: 80, borderRadius: 40 },
  name: { marginTop: 8, fontWeight: '500' },
  price: { marginTop: 4, fontWeight: 'bold', color: '#34A853' }
});
 
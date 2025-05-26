 import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from './Button';
import { assets } from '../data/coffeeData';
export function DeliveryBanner({ onPress }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: assets.delivery }} style={styles.image} />
      <View style={styles.textGroup}>
        <Text style={styles.title}>Free Delivery!</Text>
        <Text style={styles.subtitle}>For your first order</Text>
      </View>
      <Button title="Get Started" onPress={onPress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 8, margin: 16, padding: 16, flexDirection: 'row', alignItems: 'center' },
  image: { width: 60, height: 60 },
  textGroup: { flex: 1, marginLeft: 12 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 12, color: '#666' }
});

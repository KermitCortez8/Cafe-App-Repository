// CoffeeDetailsScreen.js

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/coffees';
import Subtitle from '../components/Subtitle';
import IconButton from '../components/IconButton';

export default function CoffeeDetailsScreen({
  route,
  navigation,
  favoriteMealIds,
  addFavorite,
  removeFavorite,
  addToCart,  // Para agregar al carrito
}) {
  const { coffeeId } = route.params;
  const coffee = MEALS.find(m => m.id === coffeeId);
  const isFav = favoriteMealIds.includes(coffeeId);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: coffee.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{coffee.name}</Text>
      <Text style={styles.details}>
        Difficulty: {coffee.difficulty} | Time: {coffee.preparationTime} min
      </Text>

      <Subtitle text="Ingredients" />
      {coffee.ingredients.map((ing, index) => (
        <Text key={index} style={styles.listItem}>• {ing}</Text>
      ))}

      <Subtitle text="Instructions" />
      {coffee.instructions.map((step, index) => (
        <Text key={index} style={styles.listItem}>{index + 1}. {step}</Text>
      ))}

      <View style={styles.buttonContainer}>
        <IconButton
          icon={isFav ? 'star' : 'star-outline'}
          title={isFav ? 'Remove Favorite' : 'Add Favorite'}
          onPress={() =>
            isFav ? removeFavorite(coffeeId) : addFavorite(coffeeId)
          }
        />
        <IconButton
          icon="cart-outline"
          title="Add to Cart"
          onPress={() => addToCart(coffee)} // Añadir al carrito
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f3f3f3', padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4CAF50', marginBottom: 8 },
  details: { fontSize: 16, color: '#666', marginBottom: 16 },
  listItem: { fontSize: 16, color: '#333', marginVertical: 4 },
  buttonContainer: { alignItems: 'center', marginTop: 20 },
});

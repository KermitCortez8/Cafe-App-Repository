// FavoritesScreen.js

import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MEALS } from '../data/coffees';
import MealItem from '../components/MealItem';
import Subtitle from '../components/Subtitle';

export default function FavoritesScreen({ navigation, favoriteMealIds, cartItems }) {
  const favs = MEALS.filter(m => favoriteMealIds.includes(m.id));

  return (
    <View style={styles.container}>
      <Subtitle text="Your Favorite Coffees" />
      <FlatList
        data={cartItems} // Muestra los productos del carrito
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CoffeeDetails', { coffeeId: item.id })}
          >
            <MealItem
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f3f3', padding: 16 },
});

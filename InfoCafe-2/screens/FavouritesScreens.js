// /src/screens/FavouritesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CoffeeCard } from '../components/CoffeeCard';
import { coffees } from '../data/coffeeData';

export default function FavouritesScreen({ navigation }) {
  // Ejemplo: marcamos como favoritos los dos primeros cafés
  const favourites = coffees.slice(0, 2);

  return (
    <View style={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CoffeeCard
              coffee={item}
              onPress={() => navigation.navigate('Detail', { coffee: item })}
            />
          )}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>No tienes favoritos aún.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    padding: 16,
  },
  list: {
    justifyContent: 'space-between',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    color: '#666',
    fontSize: 16,
  },
});

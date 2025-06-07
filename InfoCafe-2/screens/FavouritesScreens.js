// FavouritesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CoffeeCard } from '../components/CoffeeCard';
import { getCoffees } from '../utils/cafe-context';  // Importamos la función de Firebase

export default function FavouritesScreen({ navigation }) {
  const [favourites, setFavourites] = useState([]);  // Estado para almacenar los cafés favoritos

  // Obtener los cafés desde Firebase Realtime Database
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        // Obtener datos de Firebase (coffees)
        const coffeesFromDB = await getCoffees();

        // Filtrar los favoritos (suponiendo que hay un campo 'isFavourite' en Firebase)
        const favouriteCoffees = Object.values(coffeesFromDB).filter(coffee => coffee.isFavourite); // Filtra por 'isFavourite' si está presente

        setFavourites(favouriteCoffees);  // Establecer los cafés favoritos en el estado
      } catch (error) {
        console.error('Error al obtener los cafés:', error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <View style={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}  // Aseguramos que cada item tenga un id válido
          numColumns={2}
          renderItem={({ item }) => (
            <CoffeeCard
              coffee={item}
              onPress={() => navigation.navigate('DetallesCafe', { coffee: item })}  // Navegar a DetallesCafe
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

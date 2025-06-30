// screens/FavouritesScreen.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useStoreContext } from 'C:/Users/albco/Documents/GitHub/Cafe-App-Repository/InfoCafe-2/store/store.js'; // Importar contexto de la tienda
import ProductCard from 'C:/Users/albco/Documents/GitHub/Cafe-App-Repository/InfoCafe-2/componentes/ProductoCard'; // Importar ProductCard
import CustomHeader from 'C:/Users/albco/Documents/GitHub/Cafe-App-Repository/InfoCafe-2/componentes/HeaderPerso'; // Importar CustomHeader

export default function FavouritesScreen() {
  const { state } = useStoreContext(); // Obtener el estado global
  const { FavoritesList } = state; // Lista de productos favoritos

  // Función para renderizar cada producto usando ProductCard
  const renderItem = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={styles.container}>
      <CustomHeader />  {/* Aquí agregamos el CustomHeader */}
      {FavoritesList.length > 0 && (
        <FlatList
          data={FavoritesList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          numColumns={2} // Muestra los productos en dos columnas
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 10,
  },
});

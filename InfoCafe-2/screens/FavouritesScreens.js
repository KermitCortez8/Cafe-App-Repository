// screens/FavouritesScreen.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../../InfoCafe-2/componentes/ProductoCard';
import CustomHeader from '../../InfoCafe-2/componentes/HeaderPerso';
import { useStoreContext } from '../../InfoCafe-2/store/store';

export default function FavouritesScreen() {
  const { state } = useStoreContext();
  const { FavoritesList } = state;

  const renderItem = ({ item }) => <ProductCard product={item} />;

  return (
    <View style={styles.container}>
      <CustomHeader />
      {FavoritesList.length > 0 && (
        <FlatList
          data={FavoritesList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}

          numColumns={2}

          // Distribuye los dos items en cada fila y añade espacio entre filas
          columnWrapperStyle={styles.row}

          // Padding lateral y espacio inferior de la lista
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 10,
    paddingHorizontal: 16, // espacio lateral
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between', // separa los 2 cards
    marginBottom: 16,                 // espacio vertical entre filas
  },
});

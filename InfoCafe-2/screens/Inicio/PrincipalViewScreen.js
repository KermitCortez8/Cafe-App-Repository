 // /src/screens/Inicio/PrincipalViewScreen.js
import React, { useState } from 'react';
import { View, FlatList, ScrollView, StyleSheet } from 'react-native';

import Header               from '../../components/Header';
import { DeliveryBanner }   from '../../components/DeliveryBanner';
import SearchBar            from '../../components/SearchBar';
import PromoCarousel        from '../../components/PromoCarrusel';
import { CategoryChip }     from '../../components/CategoryChip';
import { CoffeeCard }       from '../../components/CoffeeCard';
import { categories, coffees } from '../../data/coffeeData';

export default function PrincipalViewScreen({ navigation }) {
  const [search, setSearch]       = useState('');
  const [selectedCat, setCat]     = useState(null);

  // Filtrar cafés según categoría seleccionada y texto de búsqueda
  const filtered = coffees.filter(c =>
    (selectedCat ? c.category === selectedCat : true) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado personalizado */}
      <Header />

      {/* Banner de delivery */}
      <DeliveryBanner onPress={() => { /* acción al pulsar banner */ }} />

      {/* Barra de búsqueda */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Carrusel de promociones */}
      <PromoCarousel />

      {/* Filtro por categorías */}
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryChip
            label={item.name}
            selected={selectedCat === item.id}
            onPress={() => setCat(item.id)}
          />
        )}
        style={styles.chipList}
      />

      {/* Lista de cafés filtrados en dos columnas */}
      <View style={styles.coffeeListContainer}>
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={false} // Desactivar scroll interno para que ScrollView principal maneje el scroll
          renderItem={({ item }) => (
            <CoffeeCard
              coffee={item}
              onPress={() =>
                navigation.navigate('DetallesCafe', { coffee: item })
              }
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E1',
  },
  chipList: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  coffeeListContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
});


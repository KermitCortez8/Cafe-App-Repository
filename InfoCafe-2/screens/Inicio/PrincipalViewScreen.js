// PrincipalViewScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView, StyleSheet } from 'react-native';

import { getCategories, getCoffees } from '../../utils/firebase'; // Importa las funciones de firebase
import Header from '../../components/Header';
import { DeliveryBanner } from '../../components/DeliveryBanner';
import { SearchBar } from '../../components/SearchBar';
import PromoCarousel from '../../components/PromoCarrusel';
import { CategoryChip } from '../../components/CategoryChip';
import { CoffeeCard } from '../../components/CoffeeCard'; // Verifica que esta importación sea correcta

export default function PrincipalViewScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedCat, setCat] = useState(null);
  const [coffees, setCoffeesData] = useState([]);
  const [categories, setCategoriesData] = useState([]);

  // Obtener categorías y cafés de Firebase
  useEffect(() => {
    const fetchData = async () => {
      const categoriesFromDB = await getCategories();
      const coffeesFromDB = await getCoffees();

      // Actualizamos los cafés con la URL de la imagen de Firebase Storage
      const updatedCoffees = coffeesFromDB.map(coffee => ({
        ...coffee,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/info-cafe-1e08a.firebasestorage.app/o/descarga.jpg?alt=media&token=fb3580d2-6d73-43eb-b944-e142fa5b1cfa" // URL de la imagen
      }));

      setCategoriesData(categoriesFromDB);
      setCoffeesData(updatedCoffees); // Actualiza los cafés con la URL de la imagen
    };

    fetchData();
  }, []);

  const filtered = coffees.filter(coffee =>
    (selectedCat ? coffee.category === selectedCat : true) &&
    coffee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Header />
      <DeliveryBanner onPress={() => { /* acción cuando presionan el banner */ }} />
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar café..." />
      <PromoCarousel />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id.toString()}
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
      <View style={styles.coffeeListContainer}>
        <FlatList
          data={filtered}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <CoffeeCard
              coffee={item}
              onPress={() => navigation.navigate('ProductDetail', { product: item })}
              imageUrl={item.imageUrl} // Pasamos la URL de la imagen
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

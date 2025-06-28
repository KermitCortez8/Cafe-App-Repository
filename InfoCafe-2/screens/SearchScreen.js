// SearchScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getCoffees } from '../utils/cafe-context';  // Importamos desde cafe-context
import { SearchBar } from '../components/SearchBar';
import { CoffeeCard } from '../components/CoffeeCard';

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [coffees, setCoffees] = useState([]);

  // Obtener cafés desde Firebase
  useEffect(() => {
    const fetchData = async () => {
      const coffeesFromDB = await getCoffees();
      const updatedCoffees = coffeesFromDB.map(coffee => ({
        ...coffee,
        imageUrl: coffee.imageUrl  // Usamos la URL de la imagen de Firebase Storage
      }));
      setCoffees(updatedCoffees);
    };

    fetchData();
  }, []);

  const filtered = coffees.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChange={setSearch} />  {/* Manejamos el valor del SearchBar */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}  // Aseguramos que cada item tenga un id válido
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CoffeeCard
            coffee={item}
            onPress={() => navigation.navigate('DetallesCafe', { coffee: item })}  // Navegar a DetallesCafe
            imageUrl={item.imageUrl} // Usamos la URL de la imagen
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef2f5' },
  list: { paddingHorizontal: 16 }
});

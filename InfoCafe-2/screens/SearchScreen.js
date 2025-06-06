// SearchScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getCoffees } from '../utils/firebase'; // Importar la función de Firebase
import { SearchBar } from '../components/SearchBar';
import { CoffeeCard } from '../components/CoffeeCard'; // Asegúrate de que esta importación sea correcta

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [coffees, setCoffees] = useState([]);

  // Obtener cafés desde Firebase
  useEffect(() => {
    const fetchData = async () => {
      const coffeesFromDB = await getCoffees();
      const updatedCoffees = coffeesFromDB.map(coffee => ({
        ...coffee,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/info-cafe-1e08a.firebasestorage.app/o/descarga.jpg?alt=media&token=fb3580d2-6d73-43eb-b944-e142fa5b1cfa"
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
      <SearchBar value={search} onChange={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CoffeeCard
            coffee={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
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

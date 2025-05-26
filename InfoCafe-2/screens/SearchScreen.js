import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { CoffeeCard } from '../components/CoffeeCard';
import { coffees } from '../data/coffeeData';

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');
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
            onPress={() => navigation.navigate('Detail', { coffee: item })}
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

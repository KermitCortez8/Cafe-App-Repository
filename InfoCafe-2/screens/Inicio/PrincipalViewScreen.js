// /src/screens/Inicio/PrincipalViewScreen.js
import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import { DeliveryBanner }      from '../../components/DeliveryBanner'
import { SearchBar }           from '../../components/SearchBar'
import { CategoryChip }        from '../../components/CategoryChip'
import { CoffeeCard }          from '../../components/CoffeeCard'
import { categories, coffees } from '../../data/coffeeData'

export default function PrincipalViewScreen({ navigation }) {
  const [search, setSearch]       = useState('')
  const [selectedCat, setCat]     = useState(null)

  const filtered = coffees.filter(c =>
    (selectedCat ? c.category === selectedCat : true) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <DeliveryBanner onPress={() => { /* ... */ }} />
      <SearchBar    value={search} onChange={setSearch} />

      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CategoryChip
            label={item.name}
            selected={selectedCat === item.id}
            onPress={() => setCat(item.id)}
          />
        )}
        style={styles.chipList}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CoffeeCard
            coffee={item}
            onPress={() => navigation.navigate('Detail', { coffee: item })}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef2f5' },
  chipList:  { marginHorizontal: 16 }
})

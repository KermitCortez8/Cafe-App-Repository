import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/categories';
import CategoryGridItem from '../components/CategoryGridItem';
import Subtitle from '../components/Subtitle';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Subtitle text="Choose a Coffee Category" />
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
              navigation.navigate('CoffeeOverview', { categoryId: item.id })
            }
          >
            <CategoryGridItem title={item.title} color={item.color} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f3f3', padding: 16 },
  gridItem: { flex: 1, margin: 8 },
});

// src/screens/CategoriesScreen.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/categories';
import CategoryGridItem from '../components/CategoryGridItem';
import Subtitle from '../components/Subtitle';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Subtitle text="Choose a Coffee Category" />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryGridItem
            title={item.title}
            color={item.color}
            onPress={() =>
              navigation.navigate('CoffeeOverview', { categoryId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 16,
  },
});

 
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem'; // Importa MealItem

const MealList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MealItem
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default MealList;

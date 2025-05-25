import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo! Favoritos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',    
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E1F00',
  },
});

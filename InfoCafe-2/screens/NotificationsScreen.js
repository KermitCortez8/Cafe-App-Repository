import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../InfoCafe-2/componentes/HeaderPerso'


export default function FavouritesScreen() {
  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.text}>¡Hola Mundo! Notificaciones</Text>
      </View>
    </>
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

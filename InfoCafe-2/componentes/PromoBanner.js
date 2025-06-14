import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.nespresso.com/coffee-blog/sites/default/files/2023-04/3-03_img_1_1142x644_cabecera.jpg',
        }}
        style={styles.image}
        //resizeMode="contain" // Muestra la imagen completa sin recortes
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',  // Recorta cualquier parte que se salga, útil para los bordes redondeados
    marginBottom: 16,
    //backgroundColor: '#fff' // Fondo en caso de franjas
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

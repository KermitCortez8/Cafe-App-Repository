import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/007/731/432/non_2x/coffee-shop-offer-menu-design-save-50-coffee-free-vector.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180, // más alto para mostrar mejor la imagen
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ProductImage({ source }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '80%',
    height: 250,
    marginTop: 24,
    alignSelf: 'center',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

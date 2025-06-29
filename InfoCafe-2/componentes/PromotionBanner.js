import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PromotionBanner({ title, image }) {
  return (
    <View style={styles.banner}>
      {image && (
        <Image source={image} style={styles.image} resizeMode="cover" />
      )}
      <Text style={styles.bannerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#eee', // útil para visualizar si la imagen no carga
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E1F00',
    padding: 16,
    textAlign: 'center',
  },
});
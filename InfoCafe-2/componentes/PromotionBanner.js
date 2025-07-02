import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PromotionBanner({ title, image }) {
  return (
    <View style={styles.banner}>
      {image && (
        <Image source={image} style={styles.image} resizeMode="cover" />
      )}
      <View style={styles.overlay}>
        <Text style={styles.bannerTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden', // importante para que el borde redondeado afecte a la imagen
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(78, 31, 0, 0.75)',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8F4E1',
    textAlign: 'center',
  },
});

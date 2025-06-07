// DetailsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '../../components/Button';

export default function DetailsScreen({ route }) {
  const { coffee } = route.params;  // Aquí recibimos el parámetro "coffee" que pasamos desde PrincipalViewScreen

  return (
    <ScrollView style={styles.container}>
      {/* Mostrar la imagen del café */}
      <Image source={{ uri: coffee.imageUrl }} style={styles.image} />

      <View style={styles.content}>
        {/* Nombre del café */}
        <Text style={styles.title}>{coffee.name}</Text>

        {/* Mostrar el rating */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>5.0 (120)</Text>  {/* Puedes ajustar esta parte con el rating real si lo tienes */}
        </View>

        {/* Descripción del café */}
        <Text style={styles.desc}>
          Enjoy a premium coffee experience with rich crema and aroma. {/* Puedes modificar esta descripción */}
        </Text>

        {/* Botón de compra */}
        <Button title="Buy Now" onPress={() => { /* Acción de compra */ }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  rating: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
});

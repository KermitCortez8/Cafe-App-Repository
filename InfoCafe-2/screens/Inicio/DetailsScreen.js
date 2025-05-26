import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '../../components/Button';
export default function DetailsScreen({ route }) {
  const { coffee } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: coffee.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{coffee.name}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>5.0 (120)</Text>
        </View>
        <Text style={styles.desc}>Enjoy a premium coffee experience with rich crema and aroma.</Text>
        <Button title="Buy Now" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 250 },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  rating: { marginLeft: 6, fontSize: 14 },
 	desc: { fontSize: 14, color: '#666', marginBottom: 16 }
});
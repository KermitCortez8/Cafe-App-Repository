import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState('M');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk.';
  const shortDescription = description.slice(0, 80) + '...';

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} resizeMode="cover" />
      </View>

      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.variant}>{product.variant}</Text>

        {/* Rating */}
        <View style={styles.row}>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>{product.rating} (230)</Text>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          {showFullDescription ? description : shortDescription}
          {!showFullDescription && (
            <Text style={styles.readMore} onPress={() => setShowFullDescription(true)}> Read More</Text>
          )}
        </Text>

        {/* Size Selector */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {['S', 'M', 'L'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeBox, selectedSize === size && styles.sizeBoxSelected]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextSelected]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    backgroundColor: '#4E1F00', // marrón
    paddingTop: 75,      // aumentado para más espacio superior
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },

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

  infoContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  variant: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    color: '#444',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: '#666',
    fontSize: 16,
    marginBottom: 16,
  },
  readMore: {
    color: '#4E1F00', // marrón para "Read More"
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
    marginBottom: 24,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 12,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeBoxSelected: {
    backgroundColor: '#4E1F00',
    borderColor: '#4E1F00',
  },
  sizeText: {
    fontSize: 18,
    color: '#333',
  },
  sizeTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

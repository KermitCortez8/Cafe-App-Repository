import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CARD_MARGIN = 10;
const CARD_WIDTH = (Dimensions.get('window').width / 2) - (CARD_MARGIN * 3);

export function CoffeeCard({ coffee, onPress }) {
  const navigation = useNavigation();

  const imageSource = typeof coffee.imageUrl === 'string' ? { uri: coffee.imageUrl } : coffee.imageUrl;

  const handlePress = () => {
    if (onPress) {
      onPress(coffee);
    } else {
      navigation.navigate('DetallesCafe', { coffee });
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.9}>
      {typeof coffee.rating === 'number' && (
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="#FFC107" />
          <Text style={styles.ratingText}>{coffee.rating.toFixed(1)}</Text>
        </View>
      )}

      <Image source={imageSource} style={styles.image} resizeMode="cover" />

      <View style={styles.infoBox}>
        <Text style={styles.name} numberOfLines={2}>{coffee.name}</Text>
        {coffee.type && <Text style={styles.type}>{coffee.type}</Text>}
        <View style={styles.footer}>
          <Text style={styles.price}>₱ {typeof coffee.price === 'number' ? coffee.price.toFixed(2) : coffee.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: CARD_MARGIN,
    width: CARD_WIDTH,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 2,
    backgroundColor: '#fff9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  ratingText: {
    marginLeft: 4,
    color: '#FFC107',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoBox: {
    paddingHorizontal: 12,
    paddingBottom: 14,
    paddingTop: 12,
    minHeight: 90,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#24211A',
    marginBottom: 2,
  },
  type: {
    color: '#8b8b8b',
    fontSize: 13,
    marginBottom: 4,
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#52310e',
  },
  addButton: {
    backgroundColor: '#52310e',
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default CoffeeCard;

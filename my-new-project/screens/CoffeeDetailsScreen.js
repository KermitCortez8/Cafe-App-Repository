
import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  Alert, 
  ToastAndroid, 
  Platform 
} from 'react-native';
import { MEALS } from '../data/coffees';
import Subtitle from '../components/Subtitle';
import IconButton from '../components/IconButton';

export default function CoffeeDetailsScreen({
  route,
  navigation,
  favoriteMealIds,
  addFavorite,
  removeFavorite,
  addToCart,
}) {
  const { coffeeId } = route.params;
  const coffee = MEALS.find(m => m.id === coffeeId);
  const isFav = favoriteMealIds.includes(coffeeId);

  const numericPrice = typeof coffee.price === 'number'
    ? coffee.price
    : parseFloat(coffee.price);

  const handleAddToCart = () => {
    addToCart(coffee);

    const message = `${coffee.name} añadido al carrito.`;

    if (Platform.OS === 'android') {
      // Toast en Android
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      // Alert en iOS / Web
      Alert.alert('¡Añadido al carrito!', message, [{ text: 'OK' }]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: coffee.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{coffee.name}</Text>
        <Text style={styles.details}>
          {coffee.preparationTime} min
        </Text>

        {/* Precio */}
        <Text style={styles.price}>${numericPrice.toFixed(2)}</Text>

        {/* Ingredientes */}
        <View style={styles.section}>
          <Subtitle text="Ingredientes" />
          {coffee.ingredients.map((ing, index) => (
            <Text key={index} style={styles.listItem}>• {ing}</Text>
          ))}
        </View>

        {/* Descripción */}
        <View style={styles.section}>
          <Subtitle text="Descripción" />
          {coffee.instructions.map((desc, index) => (
            <Text key={index} style={styles.listItem}>{desc}</Text>
          ))}
        </View>

        {/* Botones de acción */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <IconButton
              icon={isFav ? 'star' : 'star-outline'}
              title={isFav ? 'Quitar Favorito' : 'Agregar a Favoritos'}
              onPress={() =>
                isFav ? removeFavorite(coffeeId) : addFavorite(coffeeId)
              }
              color="#006241"
              textColor="white"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <IconButton
              icon="cart-outline"
              title="Añadir al Carrito"
              onPress={handleAddToCart}
              color="#8B4513"
              textColor="white"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F4E1',
  },
  image: {
    width: '80%',
    height: 140,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 16,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#74512D',
    marginBottom: 6,
  },
  details: {
    fontSize: 18,
    color: '#74512D',
    marginBottom: 14,
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#74512D',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#74512D',
    marginVertical: 6,
    paddingLeft: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonWrapper: {
    marginHorizontal: 8,
  },
});

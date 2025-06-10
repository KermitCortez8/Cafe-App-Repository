// screens/DetailsScreen.js (¡Versión FINAL sin console.log!)
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../../../InfoCafe-2/componentes/Header';
import ProductImage from '../../../InfoCafe-2/componentes/ProductImage';
import ProductInfo from '../../../InfoCafe-2/componentes/ProductInfo';
import Description from '../../../InfoCafe-2/componentes/Description';
import SizeSelector from '../../../InfoCafe-2/componentes/SizeSelector';

export default function DetailsScreen({ route, navigation }) {
  const { product } = route.params;

  const [selectedSize, setSelectedSize] = useState('M'); // Tamaño 'M' por defecto
  const [currentPrice, setCurrentPrice] = useState('0.00'); // Estado para el precio
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fullDescriptionText = product?.description || '';
  const MAX_DESCRIPTION_LENGTH = 150;

  const shortDescriptionText = fullDescriptionText.length > MAX_DESCRIPTION_LENGTH
    ? fullDescriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
    : fullDescriptionText;

  // Efecto para actualizar el precio
  useEffect(() => {
    // Los console.log de depuración han sido eliminados aquí
    if (product && product.prices && product.prices.length > 0) {
      const priceObject = product.prices.find(p => p.size === selectedSize);

      if (priceObject) {
        setCurrentPrice(`${priceObject.currency}${priceObject.price}`);
      } else {
        // Fallback: Si por alguna razón no encuentra el tamaño, usa el precio del primer tamaño
        setCurrentPrice(`${product.prices[0].currency}${product.prices[0].price}`);
      }
    } else {
      setCurrentPrice('N/A'); // O un valor por defecto si no hay precios
    }
  }, [selectedSize, product]);

  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para añadir al carrito
    console.log(`Agregado al carrito: ${product?.name} - Talla: ${selectedSize} - Precio: ${currentPrice}`);
    // Por ejemplo, podrías añadir un toast, navegar a la pantalla del carrito, etc.
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Detail" onBack={() => navigation.navigate('PrincipalView')} />

      <ProductImage source={product?.image} />

      <View style={styles.infoContainer}>
        <ProductInfo
          name={product?.name}
          roasted={product?.roasted}
          average_rating={product?.average_rating}
        />

        <View style={styles.separator} />

        {fullDescriptionText.length > 0 && (
          <Description
            fullText={fullDescriptionText}
            shortText={shortDescriptionText}
            showFull={showFullDescription}
            toggleShow={() => setShowFullDescription(!showFullDescription)}
          />
        )}

        <SizeSelector selectedSize={selectedSize} onSelect={setSelectedSize} />

        <View style={styles.priceCartContainer}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>{currentPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  infoContainer: { paddingHorizontal: 20 },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  priceCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  priceLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#4E1F00',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
// screens/DetailsScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Header from '../../../InfoCafe-2/componentes/Header';
import ProductImage from '../../../InfoCafe-2/componentes/ProductImage';
import ProductInfo from '../../../InfoCafe-2/componentes/ProductInfo';
import Description from '../../../InfoCafe-2/componentes/Description';
import SizeSelector from '../../../InfoCafe-2/componentes/SizeSelector';

export default function DetailsScreen({ route, navigation }) {
  const { product, onAddToCart } = route.params;

  const [selectedSize, setSelectedSize] = useState('M');
  const [currentPrice, setCurrentPrice] = useState('0.00');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fullDescriptionText = product?.description || '';
  const MAX_DESCRIPTION_LENGTH = 150;

  const shortDescriptionText = fullDescriptionText.length > MAX_DESCRIPTION_LENGTH
    ? fullDescriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
    : fullDescriptionText;

  // Efecto para actualizar el precio
  useEffect(() => {
    if (product && product.prices && product.prices.length > 0) {
      const defaultSizeFromData = product.prices[0]?.size || 'M';
      if (!product.prices.some(p => p.size === selectedSize)) {
         setSelectedSize(defaultSizeFromData);
      }

      const priceObject = product.prices.find(p => p.size === selectedSize);
      let unitPrice = 0; // Precio por unidad
      let currency = '';

      if (priceObject) {
        unitPrice = parseFloat(priceObject.price);
        currency = priceObject.currency;
      } else {
        unitPrice = parseFloat(product.prices[0].price);
        currency = product.prices[0].currency;
      }

      // --- CALCULA EL PRECIO TOTAL MULTIPLICANDO POR LA CANTIDAD ---
      const totalPrice = unitPrice * quantity;
      setCurrentPrice(`${currency}${totalPrice.toFixed(2)}`);
    } else {
      setCurrentPrice('N/A');
    }
  }, [selectedSize, product, quantity]); // <--- ¡Añadido 'quantity' como dependencia!

  const handleAddToCartAndNavigate = () => {
    if (onAddToCart) {
      onAddToCart(product.id, selectedSize, quantity);

      Alert.alert(
        "Producto Agregado",
        `¡${product.name} (${selectedSize}, ${quantity} unidad${quantity > 1 ? 'es' : ''}) agregado al carrito!`,
        [
          { text: "OK", onPress: () => {
            navigation.navigate('PickupScreen');
          }}
        ]
      );
    } else {
      console.warn("onAddToCart function not provided to DetailsScreen. Cannot add to cart.");
      Alert.alert("Error", "No se pudo añadir el producto al carrito. Inténtalo de nuevo.");
    }
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

        <SizeSelector
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
            sizes={product?.prices || []}
        />

        <Text style={styles.sectionTitle}>Quantity</Text>
        <View style={styles.quantityControl}>
            <TouchableOpacity
                onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
                style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
                onPress={() => setQuantity(prev => prev + 1)}
                style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.priceCartContainer}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>{currentPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCartAndNavigate}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    width: 120,
    padding: 5,
    marginBottom: 20,
  },
  quantityButton: {
    padding: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#333',
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
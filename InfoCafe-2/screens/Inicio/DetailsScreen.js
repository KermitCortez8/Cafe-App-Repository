// screens/DetailsScreen.js
import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Header from '../../../InfoCafe-2/componentes/Header';
import ProductImage from '../../../InfoCafe-2/componentes/ProductImage';
import ProductInfo from '../../../InfoCafe-2/componentes/ProductInfo';
import Description from '../../../InfoCafe-2/componentes/Description';
import SizeSelector from '../../../InfoCafe-2/componentes/SizeSelector';
// Importa tu hook del contexto o store que has configurado
import { useStoreContext } from '../../../InfoCafe-2/store/store';

export default function DetailsScreen({ route, navigation }) {
  // Recibes el producto desde los parámetros de la ruta
  const { product } = route.params;
  // Extraes la función addToCart de tu Store Context
  const { addToCart } = useStoreContext();

  const [selectedSize, setSelectedSize] = useState('M');
  const [currentPrice, setCurrentPrice] = useState('0.00');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fullDescriptionText = product?.description || '';
  const MAX_DESCRIPTION_LENGTH = 150;
  const shortDescriptionText =
    fullDescriptionText.length > MAX_DESCRIPTION_LENGTH
      ? fullDescriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : fullDescriptionText;

  // Actualiza el precio cada vez que cambie el tamaño, el producto o la cantidad
  useEffect(() => {
    if (product && product.prices && product.prices.length > 0) {
      // Si el tamaño seleccionado no existe en los precios, se usa el primer elemento
      const defaultSizeFromData = product.prices[0]?.size || 'M';
      if (!product.prices.some(p => p.size === selectedSize)) {
        setSelectedSize(defaultSizeFromData);
      }
      const priceObject =
        product.prices.find(p => p.size === selectedSize) || product.prices[0];
      const unitPrice = parseFloat(priceObject.price);
      const totalPrice = unitPrice * quantity;
      setCurrentPrice(`${priceObject.currency}${totalPrice.toFixed(2)}`);
    } else {
      setCurrentPrice('N/A');
    }
  }, [selectedSize, product, quantity]);

  // Función que se ejecuta al presionar "Add to Cart"
  const handleAddToCartAndNavigate = () => {
    // Construye el objeto cartItem sobrescribiendo la propiedad "prices" para asignar
    // el tamaño y cantidad seleccionados
    const priceObject =
      product.prices.find(p => p.size === selectedSize) || product.prices[0];
    const cartItem = {
      ...product,
      prices: [
        {
          ...priceObject,
          quantity: quantity,
        },
      ],
    };

    // Agrega el producto al carrito a través del contexto
    addToCart(cartItem);

    // Muestra un alerta y redirige a la pantalla "DeliverScreen"
    navigation.navigate('Pedido', { screen: 'Deliver' });

  };

  return (
    <ScrollView style={styles.container}>
      <Header
        title="Detalle"
        onBack={() => navigation.navigate('PrincipalView')}
      />
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

        <Text style={styles.sectionTitle}>Cantidad</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(prev => prev + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.priceCartContainer}>
          <View>
            <Text style={styles.priceLabel}>Precio</Text>
            <Text style={styles.priceValue}>{currentPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCartAndNavigate}
          >
            <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
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
  quantityButton: { padding: 14 },
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
    backgroundColor: '#4E1F00', // Puedes ajustar o eliminar este color para el diseño deseado
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

// screens/DetailsScreen.js
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../InfoCafe-2/componentes/Header';
import ProductImage from '../../../InfoCafe-2/componentes/ProductImage';
import ProductInfo from '../../../InfoCafe-2/componentes/ProductInfo';
import Description from '../../../InfoCafe-2/componentes/Description';
import SizeSelector from '../../../InfoCafe-2/componentes/SizeSelector';
import useProductDetails from '../../../InfoCafe-2/utils/useProductDetails';

export default function DetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const {
    fullDescriptionText,
    shortDescriptionText,
    currentPrice,
    selectedSize,
    quantity,
    showFullDescription,
    setSelectedSize,
    setQuantity,
    toggleDescription,
    handleAddToCart,
  } = useProductDetails(product, navigation);

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
            toggleShow={toggleDescription}
          />
        )}

        <SizeSelector
          sizes={product?.prices || []}
          selectedSize={selectedSize}
          onSelect={setSelectedSize}
        />

        <Text style={styles.sectionTitle}>Cantidad</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => setQuantity(q => Math.max(1, q - 1))}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(q => q + 1)}
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
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>
              Agregar al carrito
            </Text>
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

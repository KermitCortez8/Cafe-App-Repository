// ShoppingCart.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useStoreContext } from '../../InfoCafe-2/store/store';

export default function ShoppingCart() {
  const { state, removeFromCart } = useStoreContext();
  const cartItems = state.CartList || [];
  const defaultDeliveryFee = 5; // Tarifa de delivery cuando hay productos
  
  // Si no hay productos, el delivery fee será 0.
  const calculatedDeliveryFee = cartItems.length > 0 ? defaultDeliveryFee : 0;

  // Calcula el subtotal sumando el precio (por unidad * cantidad) para cada variante del producto.
  const subtotal = cartItems.reduce((sum, item) => {
    const itemTotal = item.prices.reduce((s, priceObj) => {
      return s + (parseFloat(priceObj.price) * priceObj.quantity);
    }, 0);
    return sum + itemTotal;
  }, 0);

  const totalPayment = (subtotal + calculatedDeliveryFee).toFixed(2);

  // Validación de dirección: se considera válida si existe y no es cadena vacía.
  const isAddressValid = state.deliveryAddress && state.deliveryAddress.trim().length > 0;
  // El pedido solo se habilita si hay al menos un producto y se tiene una dirección válida.
  const isOrderEnabled = cartItems.length > 0 && isAddressValid;

  // Renderiza el listado de productos (cada producto/variante) con botón "Eliminar".
  const renderProducts = () => {
    if (cartItems.length === 0) {
      return (
        <Text style={styles.emptyCartMessage}>No hay ningún producto agregado.</Text>
      );
    }
    return cartItems.map(item =>
      item.prices.map((priceObj) => (
        <View key={`${item.id}-${priceObj.size}`} style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {priceObj.size} × {priceObj.quantity}
            </Text>
            <Text style={styles.itemPrice}>
              ${(parseFloat(priceObj.price) * priceObj.quantity).toFixed(2)}
            </Text>
          </View>
          {/* Botón para eliminar la variante/producto */}
          <TouchableOpacity 
            style={styles.removeBtn}
            onPress={() => removeFromCart({ id: item.id, size: priceObj.size })}
          >
            <Text style={styles.removeText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))
    );
  };

  return (
    <View style={styles.outerContainer}>
      {/* Área de productos (scrollable) */}
      <View style={styles.productsContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {renderProducts()}
        </ScrollView>
      </View>

      {/* Área de resumen (no scrollable) */}
      <View style={styles.summaryContainer}>
        <View style={styles.separator} />
        <View style={styles.priceDetails}>
          <View style={styles.row}>
            <Text style={styles.detailLabel}>Subtotal</Text>
            <Text style={styles.detailValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.detailLabel}>Delivery</Text>
            <Text style={styles.detailValue}>${calculatedDeliveryFee.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Payment</Text>
          <Text style={styles.totalValue}>${totalPayment}</Text>
        </View>
      </View>

      {/* Botón "Place Order" */}
      <TouchableOpacity 
        style={[
          styles.placeOrderBtn,
          !isOrderEnabled && styles.disabledPlaceOrderBtn
        ]}
        disabled={!isOrderEnabled}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  emptyCartMessage: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 6,
  },
  removeBtn: {
    marginLeft: 12,
    padding: 4,
  },
  removeText: {
    fontSize: 14,
    color: '#E53935',
    fontWeight: '600',
  },
  summaryContainer: {
    backgroundColor: '#F8F4E1',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  placeOrderBtn: {
    backgroundColor: '#4E1F00',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledPlaceOrderBtn: {
    backgroundColor: '#ccc',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

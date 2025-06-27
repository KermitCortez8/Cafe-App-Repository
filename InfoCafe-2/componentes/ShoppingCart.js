import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useShoppingCart } from '../../InfoCafe-2/utils/useShoppingCart';

export default function ShoppingCart({ orderType }) {
  const {
    cartItems,
    calculatedDeliveryFee,
    subtotal,
    totalPayment,
    removeFromCart,
    handlePlaceOrder,
  } = useShoppingCart(orderType);

  const renderProducts = () => {
    if (cartItems.length === 0) {
      return (
        <Text style={styles.emptyCartMessage}>
          No hay ningún producto agregado.
        </Text>
      );
    }
    return cartItems.map((item) =>
      item.prices.map((priceObj) => (
        <View key={`${item.id}-${priceObj.size}`} style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {priceObj.size} × {priceObj.quantity}
            </Text>
            <Text style={styles.itemPrice}>
              S/.{(parseFloat(priceObj.price) * priceObj.quantity).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.removeBtn}
            onPress={() =>
              removeFromCart({ id: item.id, size: priceObj.size })
            }
          >
            <Text style={styles.removeText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      ))
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.productsContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {renderProducts()}
        </ScrollView>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.separator} />
        <View style={styles.priceDetails}>
          <View style={styles.row}>
            <Text style={styles.detailLabel}>Subtotal</Text>
            <Text style={styles.detailValue}>S/.{subtotal.toFixed(2)}</Text>
          </View>
          {orderType?.toLowerCase() === 'deliver' && (
            <View style={styles.row}>
              <Text style={styles.detailLabel}>Delivery</Text>
              <Text style={styles.detailValue}>
                S/.{calculatedDeliveryFee.toFixed(2)}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.separator} />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total a Pagar</Text>
          <Text style={styles.totalValue}>S/.{totalPayment}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.placeOrderBtn}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderText}>Realizar pedido</Text>
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
  priceDetails: {},
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
  placeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

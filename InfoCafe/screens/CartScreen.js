import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function CartScreen({ cartItems, removeFromCart, navigation }) {
  // Calcular el total correctamente cuando `price` ya es un número
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2); // `.toFixed(2)` para mostrar dos decimales.

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
            <TouchableOpacity
              onPress={() => removeFromCart(item.id)} // Elimina el ítem del carrito
              style={styles.removeButton}
            >
              <Feather name="x-circle" size={24} color="#d9534f" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${totalAmount}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Orders', { cartItems })} // Navega a la pantalla de pedidos y pasa los ítems
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    backgroundColor: '#F8F4E1',  // Fondo con el color deseado
    flex: 1,  // Asegura que el contenedor ocupe toda la pantalla
  },

  header: { 
    fontSize: 24, 
    marginBottom: 20 
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  itemText: { 
    fontSize: 16 
  },

  removeButton: {
    padding: 6,
    borderRadius: 12,
  },

  footer: { 
    marginTop: 20, 
    alignItems: 'center' 
  },

  total: { 
    fontSize: 20, 
    marginBottom: 10 
  },

  checkoutButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

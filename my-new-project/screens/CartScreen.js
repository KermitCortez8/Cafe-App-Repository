import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function CartScreen({ cartItems, removeFromCart, navigation }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
            <Button
              title="Remove"
              onPress={() => removeFromCart(item.id)} // Elimina el café del carrito
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${totalAmount}</Text>
        <Button
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Orders', { cartItems })} // Navega a la pantalla de pedidos y pasa los ítems
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  footer: { marginTop: 20, alignItems: 'center' },
  total: { fontSize: 20, marginBottom: 10 },
});

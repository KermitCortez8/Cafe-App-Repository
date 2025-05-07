import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function OrderScreen({ route }) {
  const { cartItems } = route.params; // Accede a los cartItems pasados como parámetro
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.total}>Total: ${totalAmount}</Text>
      <Button
        title="Confirm Order"
        onPress={() => alert('Order Confirmed!')} // Aquí podrías agregar lógica para proceder con el pago
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  total: { fontSize: 20, marginTop: 20 },
});

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import Subtitle from '../components/Subtitle';

export default function OrderScreen() {
  const orderItems = [
    { id: '1', name: 'Espresso', price: '$2.99' },
    { id: '2', name: 'Cappuccino', price: '$3.50' },
  ];

  return (
    <View style={styles.container}>
      <Subtitle text="Your Coffee Order" />
      <FlatList
        data={orderItems}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} — {item.price}</Text>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title="Proceed to Checkout"
        onPress={() => alert('Proceeding to payment')}
        color="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f3f3', padding: 16 },
  item: { fontSize: 18, color: '#333', marginVertical: 8 },
});

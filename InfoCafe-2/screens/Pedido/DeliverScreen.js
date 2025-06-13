import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useStoreContext } from '../../../InfoCafe-2/store/store';
import { useNavigation } from '@react-navigation/native';
import DireccionInput from '../../componentes/DireccionInput';
import DecorativeBackground from '../../componentes/PantallaLayout';
import DeliveryToggle from '../../componentes/Toggle';


export default function DeliveryScreen() {
  const { state } = useStoreContext();
  const navigation = useNavigation();

  const cartItems = state.CartList;
  const deliveryFee = 10;

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + parseFloat(item.ItemPrice || 0);
  }, 0);

  const total = (subtotal + deliveryFee).toFixed(2);

  const renderItem = ({ item }) => {
    return item.prices.map((priceObj, index) => (
      <View key={`${item.id}-${priceObj.size}`} style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.coffeeName}>{item.name}</Text>
          <Text style={styles.sizeQuantity}>
            {priceObj.size} × {priceObj.quantity}
          </Text>
          <Text style={styles.price}>
            ${(parseFloat(priceObj.price) * priceObj.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    ));
  };

  return (

    <DecorativeBackground>
        <DeliveryToggle/>
        <DireccionInput />

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <View style={styles.footer}>
          <View style={styles.row}>
            <Text style={styles.footerLabel}>Subtotal</Text>
            <Text style={styles.footerValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.footerLabel}>Delivery</Text>
            <Text style={styles.footerValue}>${deliveryFee.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.footerTotal}>Total</Text>
            <Text style={styles.footerTotal}>${total}</Text>
          </View>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
    </DecorativeBackground>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F6F2',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  editBtn: { marginTop: 8 },
  editText: {
    color: '#74512D',
    fontWeight: '500',
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
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
  coffeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sizeQuantity: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 6,
  },
  footer: {
    backgroundColor: '#F8F4E1',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  footerLabel: {
    color: '#666',
    fontSize: 16,
  },
  footerValue: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
  },
  footerTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  confirmBtn: {
    marginTop: 20,
    backgroundColor: '#4E1F00',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

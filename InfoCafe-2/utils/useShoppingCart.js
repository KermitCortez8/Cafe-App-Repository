// util/useShoppingCart.js
import { useNavigation } from '@react-navigation/native';
import { useStoreContext } from '../store/store';
import { useMemo } from 'react';

export function useShoppingCart(orderType = 'Deliver') {
  const navigation = useNavigation();
  const { state, removeFromCart } = useStoreContext();
  const cartItems = state.CartList || [];

  const defaultDeliveryFee = 5;
  const calculatedDeliveryFee = useMemo(
    () =>
      cartItems.length > 0 && orderType.toLowerCase() === 'deliver'
        ? defaultDeliveryFee
        : 0,
    [cartItems, orderType]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          sum +
          item.prices.reduce(
            (s, priceObj) => s + parseFloat(priceObj.price) * priceObj.quantity,
            0
          ),
        0
      ),
    [cartItems]
  );

  const totalPayment = useMemo(
    () => (subtotal + calculatedDeliveryFee).toFixed(2),
    [subtotal, calculatedDeliveryFee]
  );

  const isAddressValid =
    !!state.deliveryAddress && state.deliveryAddress.trim().length > 0;

  const isOrderEnabled = cartItems.length > 0 && isAddressValid;

  const handlePlaceOrder = () => {
    if (orderType.toLowerCase() === 'deliver') {
      navigation.navigate('MapaEntrega');
    }
    // si fuera Pickup podrías añadir otra lógica aquí…
  };

  return {
    cartItems,
    calculatedDeliveryFee,
    subtotal,
    totalPayment,
    isAddressValid,
    isOrderEnabled,
    removeFromCart,
    handlePlaceOrder,
  };
}

// util/useShoppingCart.js
import { useNavigation } from '@react-navigation/native';
import { useStoreContext } from '../store/store';
import { useMemo, useCallback } from 'react';

export function useShoppingCart(orderType = 'Deliver') {
  const navigation = useNavigation();
  const { state, removeFromCart, clearCart } = useStoreContext();
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

  // Sólo habilita el pedido si hay algo en el carrito
  const isOrderEnabled = cartItems.length > 0;

  const handlePlaceOrder = useCallback(() => {
    if (!isOrderEnabled) return;      // no hace nada si está bloqueado

    const type = orderType.toLowerCase();
    if (type === 'deliver') {
      navigation.navigate('MapaEntrega');
    } else if (type === 'pickup') {
                         // vacía el carrito
      navigation.navigate('PedidoAceptado');
    }
  }, [navigation, orderType, isOrderEnabled]);

  return {
    cartItems,
    calculatedDeliveryFee,
    subtotal,
    totalPayment,
    isOrderEnabled,
    removeFromCart,
         // opcional si quieres vaciar manualmente en otro punto
    handlePlaceOrder,
  };
}

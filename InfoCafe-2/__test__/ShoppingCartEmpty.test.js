import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ShoppingCart from '../componentes/ShoppingCart';
import { StoreProvider } from '../store/store';

// Mock específico solo para esta prueba
jest.mock('../../InfoCafe-2/utils/useShoppingCart', () => ({
  useShoppingCart: () => ({
    cartItems: [],
    calculatedDeliveryFee: 0,
    subtotal: 0,
    totalPayment: 0,
    removeFromCart: jest.fn(),
    handlePlaceOrder: jest.fn(),
    isOrderEnabled: false,
  }),
}));

describe('ShoppingCart vacío', () => {
  const renderEmptyCart = () =>
    render(
      <StoreProvider>
        <ShoppingCart orderType="deliver" />
      </StoreProvider>
    );

  it('muestra mensaje cuando el carrito está vacío', async () => {
    const { getByTestId } = renderEmptyCart();

    await waitFor(() => {
      const mensaje = getByTestId('empty-cart-message');
      expect(mensaje).toBeTruthy();
      expect(mensaje.props.children).toBe('No hay ningún producto agregado.');
    });
  });
});

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ShoppingCart from '../componentes/ShoppingCart';
import { StoreProvider } from '../store/store';

//Mock especifico solo para esta prueba
const mockRemoveFromCart = jest.fn();

jest.mock('../../InfoCafe-2/utils/useShoppingCart', () => ({
  useShoppingCart: () => ({
    cartItems: [
      {
        id: 1,
        name: 'Café Americano',
        image: { uri: 'https://fakeimg.pl/100x100/' },
        prices: [{ size: 'Mediano', quantity: 2, price: '5.00' }],
      },
    ],
    calculatedDeliveryFee: 2.5,
    subtotal: 10.0,
    totalPayment: 12.5,
    removeFromCart: mockRemoveFromCart,
    handlePlaceOrder: jest.fn(),
    isOrderEnabled: true,
  }),
}));

describe('ShoppingCart botón eliminar', () => {
  const renderCart = () =>
    render(
      <StoreProvider>
        <ShoppingCart orderType="deliver" />
      </StoreProvider>
    );

  it('llama a removeFromCart al presionar el botón Eliminar', async () => {
    const { getByTestId } = renderCart();

    await waitFor(() => {
      const botonEliminar = getByTestId('remove-btn-1-Mediano');
      fireEvent.press(botonEliminar);

      expect(mockRemoveFromCart).toHaveBeenCalledWith({ id: 1, size: 'Mediano' });
    });
  });
});

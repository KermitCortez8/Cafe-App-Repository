import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ShoppingCart from '../componentes/ShoppingCart';
import { StoreProvider } from '../store/store';


jest.mock('@react-native-async-storage/async-storage');
jest.mock('../../InfoCafe-2/utils/useShoppingCart'); 

describe('ShoppingCart', () => {
  const renderComponent = () =>
    render(
      <StoreProvider>
        <ShoppingCart orderType="deliver" />
      </StoreProvider>
    );

  it('renderiza correctamente los elementos del carrito', async () => {
    const { getByTestId, getAllByTestId } = renderComponent();

    await waitFor(() => {
      expect(getByTestId('shopping-cart')).toBeTruthy();
      expect(getByTestId('subtotal').props.children.join('')).toBe('S/.17.00');
      expect(getByTestId('delivery-fee').props.children.join('')).toBe('S/.2.50');
      expect(getByTestId('total-payment').props.children.join('')).toBe('S/.19.5');

      const productos = getAllByTestId(/^cart-item-/);
      expect(productos.length).toBe(2);

      const botonesEliminar = getAllByTestId(/^remove-btn-/);
      expect(botonesEliminar.length).toBe(2);
    });
  });

  it('permite presionar el botón de realizar pedido', async () => {
    const { getByTestId } = renderComponent();

    await waitFor(() => {
      const boton = getByTestId('btn-realizar-pedido');
      expect(boton).toBeTruthy();
      expect(boton.props.accessibilityState.disabled).toBe(false);

      fireEvent.press(boton);
    });
  });
});

// __test__/store.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StoreProvider, useStoreContext } from '../store/store';
import { Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderHook, act, waitFor } from '@testing-library/react-native';


jest.mock('@react-native-async-storage/async-storage');

function TestComponent({ action }) {
  const {
    state,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
    setDeliveryAddress,
    clearCart,
  } = useStoreContext();

  const runAction = () => {
    if (action === 'favorites') {
      addToFavorites({ id: 1, name: 'Café Test' });
    }
    if (action === 'removeFavorite') {
      removeFromFavorites(1);
    }
    if (action === 'cart') {
      addToCart({
        id: 2,
        name: 'Café Carrito',
        prices: [{ size: 'M', quantity: 1 }],
      });
    }
    if (action === 'removeCart') {
      removeFromCart({ id: 2, size: 'M' });
    }
    if (action === 'address') {
      setDeliveryAddress('Av Siempre Viva 742');
    }
    if (action === 'clearCart') {
      clearCart();
    }
  };

  return (
    <>
      <Text testID="state">{JSON.stringify(state)}</Text>
      <Button title="Run" onPress={runAction} testID="btn-run" />
    </>
  );
}

describe('StoreContext with component', () => {
  const renderWithProvider = (action) =>
    render(
      <StoreProvider>
        <TestComponent action={action} />
      </StoreProvider>
    );

  it('agrega a favoritos', () => {
    const { getByTestId } = renderWithProvider('favorites');
    fireEvent.press(getByTestId('btn-run'));

    const state = JSON.parse(getByTestId('state').props.children);
    expect(state.FavoritesList).toEqual([{ id: 1, name: 'Café Test' }]);
  });

  it('remueve de favoritos', () => {
    const { getByTestId, rerender } = renderWithProvider('favorites');
    fireEvent.press(getByTestId('btn-run'));

    rerender(
      <StoreProvider>
        <TestComponent action="removeFavorite" />
      </StoreProvider>
    );
    fireEvent.press(getByTestId('btn-run'));

    const state = JSON.parse(getByTestId('state').props.children);
    expect(state.FavoritesList).toEqual([]);
  });

  it('agrega al carrito y lo limpia', () => {
    const { getByTestId, rerender } = renderWithProvider('cart');
    fireEvent.press(getByTestId('btn-run'));

    rerender(
      <StoreProvider>
        <TestComponent action="clearCart" />
      </StoreProvider>
    );
    fireEvent.press(getByTestId('btn-run'));

    const state = JSON.parse(getByTestId('state').props.children);
    expect(state.CartList).toEqual([]);
  });

  it('establece dirección', () => {
    const { getByTestId } = renderWithProvider('address');
    fireEvent.press(getByTestId('btn-run'));

    const state = JSON.parse(getByTestId('state').props.children);
    expect(state.deliveryAddress).toBe('Av Siempre Viva 742');
  });
  it('incrementa cantidad si el producto y tamaño ya existen en el carrito', () => {
  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
  const { result } = renderHook(() => useStoreContext(), { wrapper });

  const producto = {
    id: '1',
    prices: [{ size: 'M', quantity: 1 }]
  };

  act(() => {
    result.current.addToCart(producto);
    result.current.addToCart(producto);
  });

  const updatedItem = result.current.state.CartList.find(p => p.id === '1');
  expect(updatedItem.prices[0].quantity).toBe(2);
});
it('agrega un nuevo tamaño si no existe aún en el producto del carrito', () => {
  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
  const { result } = renderHook(() => useStoreContext(), { wrapper });

  const producto1 = {
    id: '1',
    prices: [{ size: 'M', quantity: 1 }]
  };
  const producto2 = {
    id: '1',
    prices: [{ size: 'L', quantity: 2 }]
  };

  act(() => {
    result.current.addToCart(producto1);
    result.current.addToCart(producto2);
  });

  const item = result.current.state.CartList.find(p => p.id === '1');
  expect(item.prices.length).toBe(2);
});
it('elimina un tamaño del producto y luego el producto completo si no quedan tamaños', () => {
  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
  const { result } = renderHook(() => useStoreContext(), { wrapper });

  const producto = {
    id: '1',
    prices: [{ size: 'M', quantity: 1 }]
  };

  act(() => {
    result.current.addToCart(producto);
    result.current.removeFromCart({ id: '1', size: 'M' });
  });

  const item = result.current.state.CartList.find(p => p.id === '1');
  expect(item).toBeUndefined();
});
it('carga estado persistido desde AsyncStorage', async () => {
  const mockState = {
    CoffeeList: [],
    CartPrice: "12",
    FavoritesList: [{ id: '1' }],
    OrderHistoryList: [{ id: 'past' }],
  };
  AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(mockState));

  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
  const { result } = renderHook(() => useStoreContext(), { wrapper });

  await waitFor(() => {
    expect(result.current.state.FavoritesList.length).toBe(1);
    expect(result.current.state.OrderHistoryList.length).toBe(1);
  });
});
it('muestra error si falla la carga desde AsyncStorage', async () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
  AsyncStorage.getItem.mockRejectedValueOnce(new Error('fail'));

  const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
  renderHook(() => useStoreContext(), { wrapper });

  await waitFor(() => {
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error loading state'), expect.any(Error));
  });

  spy.mockRestore();
});
it('lanza error si useStoreContext se usa fuera del StoreProvider', () => {
  const TestComponent = () => {
    useStoreContext(); // debe lanzar
    return null;
  };

  expect(() => render(<TestComponent />)).toThrow(
    'useStoreContext must be used within a StoreProvider'
  );
});
it('muestra error si falla al guardar el estado', async () => {
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(() => {
    throw new Error('mock save error');
  });

  render(
    <StoreProvider>
      <Text>Dummy</Text>
    </StoreProvider>
  );

  await waitFor(() => {
    expect(consoleErrorMock).toHaveBeenCalledWith(
      'Error saving state',
      expect.any(Error)
    );
  });

  consoleErrorMock.mockRestore();
});
it('ignora acciones desconocidas (default case)', () => {
  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.dispatch({ type: 'ESTA_ACCION_NO_EXISTE_EN_EL_SWITCH' });
  });

  expect(true).toBe(true); // no importa el resultado, solo que se ejecute
});
it('no agrega duplicados a favoritos si ya existe', () => {
  const producto = { id: 'cafe123', name: 'Café 1' };

  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.addToFavorites(producto); // primera vez
    result.current.addToFavorites(producto); // duplicado
  });

  expect(result.current.state.FavoritesList.length).toBe(1);
});
it('elimina solo el tamaño indicado y conserva el resto', () => {
  const producto = {
    id: 'cafe456',
    prices: [
      { size: 'M', quantity: 1 },
      { size: 'L', quantity: 2 },
    ],
  };

  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.addToCart(producto); // Agrega dos tamaños
  });

  act(() => {
    result.current.removeFromCart({ id: 'cafe456', size: 'M' }); // Elimina uno solo
  });

  const sizesRestantes = result.current.state.CartList[0].prices.map(p => p.size);
  expect(sizesRestantes).toEqual(['L']);
});
it('agrega un nuevo producto si no existe en el carrito', () => {
  const producto1 = {
    id: 'cafe999',
    prices: [{ size: 'S', quantity: 1 }],
  };

  const producto2 = {
    id: 'cafe998',
    prices: [{ size: 'M', quantity: 2 }],
  };

  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.addToCart(producto1);
    result.current.addToCart(producto2);
  });

  expect(result.current.state.CartList.length).toBe(2);
});
it('no elimina si el producto no está en el carrito', () => {
  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.removeFromCart({ id: 'productoInexistente', size: 'L' });
  });

  expect(result.current.state.CartList.length).toBe(0);
});
it('no elimina si el tamaño no está en el producto', () => {
  const producto = {
    id: 'cafe456',
    prices: [{ size: 'M', quantity: 1 }],
  };

  const { result } = renderHook(() => useStoreContext(), { wrapper: StoreProvider });

  act(() => {
    result.current.addToCart(producto);
    result.current.removeFromCart({ id: 'cafe456', size: 'L' }); // tamaño incorrecto
  });

  expect(result.current.state.CartList[0].prices.length).toBe(1);
});



});

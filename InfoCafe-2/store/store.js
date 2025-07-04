// InfoCafe-2/store/StoreContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import CoffeeData from '../data/ProductosData';

const StoreContext = createContext();

const initialState = {
  CoffeeList: CoffeeData,
  CartPrice: "0",
  FavoritesList: [],
  CartList: [],
  OrderHistoryList: [],
  deliveryAddress: null,
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      // --- FAVORITOS ---
      case 'ADD_TO_FAVORITES':
        if (!draft.FavoritesList.some(item => item.id === action.payload.id)) {
          draft.FavoritesList.push(action.payload);
        }
        break;

      case 'REMOVE_FROM_FAVORITES':
        draft.FavoritesList = draft.FavoritesList.filter(
          item => item.id !== action.payload
        );
        break;

      // --- CARRITO ---
      case 'ADD_TO_CART': {
        const item = action.payload;
        let found = false;

        for (let i = 0; i < draft.CartList.length; i++) {
          if (draft.CartList[i].id === item.id) {
            found = true;
            let sizeFound = false;

            for (let j = 0; j < draft.CartList[i].prices.length; j++) {
              if (draft.CartList[i].prices[j].size === item.prices[0].size) {
                sizeFound = true;
                draft.CartList[i].prices[j].quantity += item.prices[0].quantity;
                break;
              }
            }

            if (!sizeFound) {
              draft.CartList[i].prices.push(item.prices[0]);
            }

            break;
          }
        }

        if (!found) {
          draft.CartList.push(item);
        }

        break;
      }

      case 'REMOVE_FROM_CART': {
        const { id, size } = action.payload;
        const productIndex = draft.CartList.findIndex(item => item.id === id);

        if (productIndex !== -1) {
          const priceIndex = draft.CartList[productIndex].prices.findIndex(
            p => p.size === size
          );

          if (priceIndex !== -1) {
            draft.CartList[productIndex].prices.splice(priceIndex, 1);

            if (draft.CartList[productIndex].prices.length === 0) {
              draft.CartList.splice(productIndex, 1);
            }
          }
        }

        break;
      }

      case 'CLEAR_CART':
        draft.CartList = [];
        break;

      // --- OTROS ---
      case 'SET_DELIVERY_ADDRESS':
        draft.deliveryAddress = action.payload;
        break;

      case 'LOAD_PERSISTED_STATE':
        return {
          ...action.payload,
          CartList: [],
          deliveryAddress: null
        };

      default:
        break;
    }
  });
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('coffee-app');
        if (saved) {
          dispatch({
            type: 'LOAD_PERSISTED_STATE',
            payload: JSON.parse(saved),
          });
        }
      } catch (e) {
        console.error('Error loading state', e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const toSave = {
          CoffeeList: state.CoffeeList,
          CartPrice: state.CartPrice,
          FavoritesList: state.FavoritesList,
          OrderHistoryList: state.OrderHistoryList,
          // CartList and deliveryAddress not persisted
        };
        await AsyncStorage.setItem('coffee-app', JSON.stringify(toSave));
      } catch (e) {
        console.error('Error saving state', e);
      }
    })();
  }, [state]);

  const addToFavorites      = product => dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  const removeFromFavorites = id      => dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
  const addToCart           = item    => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart      = data    => dispatch({ type: 'REMOVE_FROM_CART', payload: data });
  const clearCart           = ()      => dispatch({ type: 'CLEAR_CART' });
  const setDeliveryAddress  = addr    => dispatch({ type: 'SET_DELIVERY_ADDRESS', payload: addr });

  return (
    <StoreContext.Provider value={{
      state,
      addToFavorites,
      removeFromFavorites,
      addToCart,
      removeFromCart,
      clearCart,
      setDeliveryAddress,
      ...(process.env.NODE_ENV === 'test' && { dispatch }) // solo para pruebas
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
}

// StoreContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import CoffeeData from '../../InfoCafe-2/data/ProductosData';

const StoreContext = createContext();

const initialState = {
  CoffeeList: CoffeeData,
  CartPrice: "0",
  FavoritesList: [],
  CartList: [],             // Siempre inicia vacío
  OrderHistoryList: [],
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
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
            priceObj => priceObj.size === size
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

      case 'CLEAR_CART': {
        draft.CartList = [];
        break;
      }

      case 'LOAD_PERSISTED_STATE':
        // Carga el estado guardado pero fuerza CartList vacío
        return { ...action.payload, CartList: [] };

      default:
        break;
    }
  });
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Carga el estado guardado al iniciar
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem("coffee-app");
        if (saved) {
          dispatch({
            type: 'LOAD_PERSISTED_STATE',
            payload: JSON.parse(saved),
          });
        }
      } catch (e) {
        console.error("Error loading state", e);
      }
    })();
  }, []);

  // Persiste estado en AsyncStorage (sin CartList)
  useEffect(() => {
    (async () => {
      try {
        const toSave = {
          CoffeeList: state.CoffeeList,
          CartPrice: state.CartPrice,
          FavoritesList: state.FavoritesList,
          // CartList no se guarda para iniciar siempre vacío
          OrderHistoryList: state.OrderHistoryList,
        };
        await AsyncStorage.setItem("coffee-app", JSON.stringify(toSave));
      } catch (e) {
        console.error("Error saving state", e);
      }
    })();
  }, [state]);

  const addToCart     = cartItem => dispatch({ type: 'ADD_TO_CART',     payload: cartItem });
  const removeFromCart= payload  => dispatch({ type: 'REMOVE_FROM_CART', payload });
  const clearCart     = ()       => dispatch({ type: 'CLEAR_CART' });

  return (
    <StoreContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      clearCart,    // ← exponemos clearCart para vaciar el carrito
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}

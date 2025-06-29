// InfoCafe-2/store/StoreContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import CoffeeData from '../data/ProductosData';  // Ajusta la ruta si hace falta

// 1) Creamos el contexto
const StoreContext = createContext();

// 2) Estado inicial, ahora con deliveryAddress
const initialState = {
  CoffeeList: CoffeeData,
  CartPrice: "0",
  FavoritesList: [],
  CartList: [],
  OrderHistoryList: [],

  // Nuevo campo para la dirección de entrega
  deliveryAddress: null,
};

// 3) Reducer con los casos existentes y el nuevo SET_DELIVERY_ADDRESS
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

      case 'LOAD_PERSISTED_STATE': {
        // Carga el estado guardado pero fuerza CartList y deliveryAddress vacío
        return {
          ...action.payload,
          CartList: [],
          deliveryAddress: null
        };
      }

      case 'SET_DELIVERY_ADDRESS': {
        draft.deliveryAddress = action.payload;
        break;
      }

      default:
        break;
    }
  });
}

// 4) Provider que envuelve la app y expone state + acciones
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // a) Cargar estado guardado al iniciar (sin CartList)
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

  // b) Persistir cambios (sin CartList)
  useEffect(() => {
    (async () => {
      try {
        const toSave = {
          CoffeeList: state.CoffeeList,
          CartPrice: state.CartPrice,
          FavoritesList: state.FavoritesList,
          OrderHistoryList: state.OrderHistoryList,
          // deliveryAddress no se persiste para reiniciar vacío cada lanzamiento
        };
        await AsyncStorage.setItem('coffee-app', JSON.stringify(toSave));
      } catch (e) {
        console.error('Error saving state', e);
      }
    })();
  }, [state]);

  // c) Acciones que expondremos
  const addToCart          = item    => dispatch({ type: 'ADD_TO_CART',            payload: item });
  const removeFromCart     = payload => dispatch({ type: 'REMOVE_FROM_CART',       payload });
  const clearCart          = ()      => dispatch({ type: 'CLEAR_CART' });
  const setDeliveryAddress = addr    => dispatch({ type: 'SET_DELIVERY_ADDRESS',  payload: addr });

  return (
    <StoreContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      clearCart,
      setDeliveryAddress,     // ← Exponemos la nueva función
    }}>
      {children}
    </StoreContext.Provider>
  );
}

// 5) Hook para consumir el contexto
export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
}

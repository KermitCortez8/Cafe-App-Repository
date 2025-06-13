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
  CartList: [], // Siempre inicia vacío
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

      case 'LOAD_PERSISTED_STATE':
        // Carga el estado persistido pero forzamos que CartList quede vacío
        return { ...action.payload, CartList: [] };

      default:
        break;

      case 'REMOVE_FROM_CART': {
        const { id, size } = action.payload;
        const productIndex = draft.CartList.findIndex(item => item.id === id);
        if (productIndex !== -1) {
          // Encuentra la variante según el tamaño
          const priceIndex = draft.CartList[productIndex].prices.findIndex(priceObj => priceObj.size === size);
          if (priceIndex !== -1) {
            // Remueve esa variante
            draft.CartList[productIndex].prices.splice(priceIndex, 1);
            // Si ya no quedan variantes, remueve el producto completo
            if (draft.CartList[productIndex].prices.length === 0) {
              draft.CartList.splice(productIndex, 1);
            }
          }
        }
        break;
      } 
    }
  });
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Carga el estado guardado
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem("coffee-app");
        if (saved) {
          dispatch({ type: 'LOAD_PERSISTED_STATE', payload: JSON.parse(saved) });
        }
      } catch (e) {
        console.log("Error loading state", e);
      }
    })();
  }, []);

  // Guarda el estado cada vez que cambia (omitimos CartList para que no se persista)
  useEffect(() => {
    const persist = async () => {
      try {
        const toSave = {
          CoffeeList: state.CoffeeList,
          CartPrice: state.CartPrice,
          FavoritesList: state.FavoritesList,
          // CartList no se guarda para iniciar siempre con un carrito vacío
          OrderHistoryList: state.OrderHistoryList,
        };
        await AsyncStorage.setItem("coffee-app", JSON.stringify(toSave));
      } catch (e) {
        console.log("Error saving state", e);
      }
    };
    persist();
  }, [state]);

  const addToCart = (cartItem) => dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  const removeFromCart = (payload) => dispatch({ type: 'REMOVE_FROM_CART', payload });

  return (
    <StoreContext.Provider value={{ state, addToCart ,removeFromCart}}>
      {children}
    </StoreContext.Provider>
  );
}

// Custom hook
export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}

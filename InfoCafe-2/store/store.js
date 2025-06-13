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
  CartList: [],
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
        return { ...action.payload };

      default:
        break;
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

  // Guarda el estado cada vez que cambia
  useEffect(() => {
    const persist = async () => {
      try {
        const toSave = {
          CoffeeList: state.CoffeeList,
          CartPrice: state.CartPrice,
          FavoritesList: state.FavoritesList,
          CartList: state.CartList,
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

  return (
    <StoreContext.Provider value={{ state, addToCart }}>
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

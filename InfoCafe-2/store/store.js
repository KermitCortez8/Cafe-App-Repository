// InfoCafe-2/store/StoreContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import CoffeeData from '../data/ProductosData';

const StoreContext = createContext();

const initialState = {
  CoffeeList: CoffeeData,
  CartPrice: "0",
  FavoritesList: [], // Lista de favoritos vacía inicialmente
  CartList: [],
  OrderHistoryList: [],
  deliveryAddress: null,
};

function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES': {
        if (!draft.FavoritesList.some(item => item.id === action.payload.id)) {
          draft.FavoritesList.push(action.payload);
        }
        break;
      }

      case 'REMOVE_FROM_FAVORITES': {
        draft.FavoritesList = draft.FavoritesList.filter(coffee => coffee.id !== action.payload);
        break;
      }

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
        };
        await AsyncStorage.setItem('coffee-app', JSON.stringify(toSave));
      } catch (e) {
        console.error('Error saving state', e);
      }
    })();
  }, [state]);

  const addToFavorites = product => dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  const removeFromFavorites = id => dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });

  return (
    <StoreContext.Provider value={{
      state,
      addToFavorites,
      removeFromFavorites,
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

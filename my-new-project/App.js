// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesStack from './screens/CategoriesStack';
import FavoritesScreen from './screens/FavoritesScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addFavorite = (id) => setFavoriteMealIds((favs) => [...favs, id]);
  const removeFavorite = (id) => setFavoriteMealIds((favs) => favs.filter((m) => m !== id));

  const addToCart = (item) => {
    setCartItems((currentCart) => [...currentCart, item]);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerContentStyle: { backgroundColor: '#006400' },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#006400',
          drawerActiveBackgroundColor: 'white',
        }}
      >
        <Drawer.Screen
          name="AllCategories"
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        >
          {props => (
            <CategoriesStack
              {...props}
              favoriteMealIds={favoriteMealIds}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              addToCart={addToCart} // Pasando la función para agregar al carrito
              cartItems={cartItems} // Pasando el estado del carrito
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen
          name="MyFavourites"
          options={{
            title: 'My Favourites',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        >
          {props => (
            <FavoritesScreen
              {...props}
              favoriteMealIds={favoriteMealIds}
              cartItems={cartItems} // Mostrando los ítems del carrito
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

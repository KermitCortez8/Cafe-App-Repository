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

  const addFavorite = (id) =>
    setFavoriteMealIds((favs) => [...favs, id]);
  const removeFavorite = (id) =>
    setFavoriteMealIds((favs) => favs.filter((m) => m !== id));

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
        {/* All Categories → Stack */}
        <Drawer.Screen
          name="AllCategories"
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
            headerShown: false, // oculta el header del Drawer
          }}
        >
          {props => (
            <CategoriesStack
              {...props}                    // lease navigation & route
              favoriteMealIds={favoriteMealIds}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          )}
        </Drawer.Screen>

        {/* Favorites → pantalla directa */}
        <Drawer.Screen
          name="MyFavourites"
          options={{
            title: 'My Favourites',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
            headerShown: false,
          }}
        >
          {props => (
            <FavoritesScreen
              {...props}
              favoriteMealIds={favoriteMealIds}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

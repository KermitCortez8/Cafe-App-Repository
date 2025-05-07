import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesStack from './screens/CategoriesStack';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

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
          headerStyle: { backgroundColor: '#006400' },
          headerTintColor: 'white',
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
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

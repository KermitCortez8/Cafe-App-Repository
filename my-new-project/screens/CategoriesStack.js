// CategoriesStack.js

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './CategoriesScreen';
import CoffeeOverviewScreen from './CoffeeOverviewScreen';
import CoffeeDetailsScreen from './CoffeeDetailsScreen';
import OrderScreen from './OrderScreen';
import FavoritesScreen from './FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function CategoriesStack({
  navigation,
  favoriteMealIds,
  addFavorite,
  removeFavorite,
  addToCart,
  cartItems, // Recibir cartItems
}) {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: '#006400' },
        headerTintColor: 'white',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          >
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'All Categories' }}
      />
      <Stack.Screen
        name="CoffeeOverview"
        component={CoffeeOverviewScreen}
        options={{ title: 'Coffees' }}
      />
      <Stack.Screen
        name="CoffeeDetails"
        children={props => (
          <CoffeeDetailsScreen
            {...props}
            favoriteMealIds={favoriteMealIds}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            addToCart={addToCart} // Pasar addToCart aquí
          />
        )}
        options={{ title: 'Details' }}
      />
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ title: 'Your Order' }}
      />
      <Stack.Screen
        name="MyFavourites"
        children={props => (
          <FavoritesScreen
            {...props}
            favoriteMealIds={favoriteMealIds}
            cartItems={cartItems} // Pasar cartItems a FavoritesScreen
          />
        )}
        options={{ title: 'My Favorites' }}
      />
    </Stack.Navigator>
  );
}

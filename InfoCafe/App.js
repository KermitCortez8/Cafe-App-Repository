import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesStack from './screens/CategoriesStack';
import FavoritesScreen from './screens/FavoritesScreen';
import CartScreen from './screens/CartScreen'; // Importa la pantalla del carrito
import OrderScreen from './screens/OrderScreen'; // Pantalla de checkout

const Drawer = createDrawerNavigator();

export default function App() {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const [cartItems, setCartItems] = useState([]);  // Estado para los ítems en el carrito

  const addFavorite = (id) => setFavoriteMealIds((favs) => [...favs, id]);
  const removeFavorite = (id) => setFavoriteMealIds((favs) => favs.filter((m) => m !== id));

  // Función para añadir al carrito
  const addToCart = (item) => {
    setCartItems((currentCart) => [...currentCart, item]);  // Agrega el ítem al carrito
  };

  // Función para eliminar del carrito
  const removeFromCart = (id) => {
    setCartItems((currentCart) => currentCart.filter(item => item.id !== id)); // Elimina el ítem del carrito
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4E1F00',
          },
          headerTintColor: '#F8F4E1',
          drawerContentStyle: { backgroundColor: '#4E1F00' },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#74512D',
          drawerActiveBackgroundColor: '#F8F4E1',
        }}
      >
        {/* All Categories → Stack */}
        <Drawer.Screen
          name="AllCategories"
          options={{
            title: 'Menú principal',
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
              addToCart={addToCart} // Pasamos la función para agregar al carrito
              cartItems={cartItems} // Pasamos los ítems del carrito
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
          }}
        >
          {props => (
            <FavoritesScreen
              {...props}
              favoriteMealIds={favoriteMealIds}
              cartItems={cartItems} // Mostramos los ítems del carrito
            />
          )}
        </Drawer.Screen>

        {/* Cart → pantalla de carrito */}
        <Drawer.Screen
          name="Cart"
          options={{
            title: 'Cart',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        >
          {props => (
            <CartScreen
              {...props}
              cartItems={cartItems} // Pasamos los ítems del carrito
              removeFromCart={removeFromCart} // Pasamos la función para eliminar del carrito
            />
          )}
        </Drawer.Screen>

        {/* Orders → pantalla de órdenes */}
        <Drawer.Screen
          name="Orders"
          options={{
            title: 'Orders',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="checkmark" color={color} size={size} />
            ),
            drawerItemStyle: { display: 'none' }, // Ocultamos el ítem "Orders" en el Drawer
          }}
        >
          {props => (
            <OrderScreen
              {...props}
              cartItems={cartItems} // Pasamos los ítems del carrito
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

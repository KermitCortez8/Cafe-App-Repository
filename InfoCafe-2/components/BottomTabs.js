import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Stacks y pantallas
import InicioStack from '/workspaces/Cafe-App-Repository/InfoCafe-2/components/InicioStack.js';
import PedidoStack from '/workspaces/Cafe-App-Repository/InfoCafe-2/components/PedidoStack';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import FavouritesScreen from '/workspaces/Cafe-App-Repository/InfoCafe-2/screens/FavouritesScreens.js';
import NotificationScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      // Opciones generales del tab bar
      screenOptions={({ route }) => ({
        headerShown: false,                             // Oculta el header en todas las pantallas
        tabBarActiveTintColor: '#74512D',               // Color del icono activo
        tabBarInactiveTintColor: 'gray',                // Color de los iconos inactivos
        tabBarStyle: { backgroundColor: '#F8F4E1' },     // Fondo de la barra de pestañas
        tabBarIcon: ({ color, size }) => {              // Definición de iconos según ruta
          switch (route.name) {
            case 'Inicio':
              return <Ionicons name="home-outline" size={size} color={color} />;
            case 'Pedido':
              return <Ionicons name="cart-outline" size={size} color={color} />;
            case 'Search':
              return <Ionicons name="search-outline" size={size} color={color} />;
            case 'Account':
              return <Ionicons name="person-outline" size={size} color={color} />;
            case 'Favourites':
              return <Ionicons name="heart-outline" size={size} color={color} />;
            case 'Notifications':
              return <Ionicons name="notifications-outline" size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      {/* Definición de cada pestaña con su componente */}
      <Tab.Screen name="Inicio" component={InicioStack} />
      <Tab.Screen name="Pedido" component={PedidoStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

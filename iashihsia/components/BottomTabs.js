// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Stacks y pantallas
import InicioStack from '../components/InicioStack.js'; // Asegúrate de que InicioStack esté registrado correctamente
import PedidoStack from '../components/PedidoStack';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import FavouritesScreen from '../screens/FavouritesScreens.js';
import NotificationScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#74512D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#F8F4E1' },
        tabBarIcon: ({ color, size }) => {
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
      <Tab.Screen name="Inicio" component={InicioStack} />
      <Tab.Screen name="Pedido" component={PedidoStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

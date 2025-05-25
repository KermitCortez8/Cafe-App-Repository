import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InicioStack from './InicioStack';
import PedidoStack from './PedidoStack';
import FavouritesScreen from '../screens/FavouritesScreens';
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
          let iconName = 'ellipse-outline';

          if (route.name === 'InicioBT') {
            iconName = 'home-outline';
          } else if (route.name === 'PedidoBT') {
            iconName = 'cart-outline';
          } else if (route.name === 'FavoritosBT') {
            iconName = 'heart-outline';
          } else if (route.name === 'NotificacionesBT') {
            iconName = 'notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="InicioBT" component={InicioStack} />
      <Tab.Screen name="PedidoBT" component={PedidoStack} />
      <Tab.Screen name="FavoritosBT" component={FavouritesScreen} />
      <Tab.Screen name="NotificacionesBT" component={NotificationScreen} />
    </Tab.Navigator>
  );
}


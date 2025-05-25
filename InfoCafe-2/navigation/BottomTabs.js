import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InicioStack from '../navigation/InicioStack';
import PedidoStack from '../navigation/PedidoStack';
import FavouritesScreen from '../screens/FavouritesScreens';
import NotificationScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#74512D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#F8F4E1' },
      }}
    >
      <Tab.Screen name="InicioBT" component={InicioStack} />
      <Tab.Screen name="PedidoBT" component={PedidoStack} />
      <Tab.Screen name="FavoritosBT" component={FavouritesScreen} />
      <Tab.Screen name="NotificacionesBT" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
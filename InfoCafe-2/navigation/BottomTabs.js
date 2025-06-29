import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StackHome from '../navigation/InicioStack';
import PedidoStack from '../navigation/PedidoStack';
import FavouritesScreen from '../screens/FavouritesScreens';
import NotificationScreen from '../screens/NotificationsScreen';
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen'


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
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'Pedido') {
            iconName = 'cart';
          } else if (route.name === 'Favoritos') {
            iconName = 'heart';
          } else if (route.name === 'Notificaciones') {
            iconName = 'notifications';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={StackHome}
        options={{ unmountOnBlur: true }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault(); 
            navigation.navigate('Inicio', {
              screen: 'PrincipalView' // nombre de la pantalla dentro de InicioStack
            });
          }
        })}
      />

      <Tab.Screen
        name="Pedido"
        component={PedidoStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Pedido', {
              screen: 'Deliver'     // nombre de la pantalla dentro de PedidoStack
            });
          }
        })}
      />
      <Tab.Screen name="Favoritos" component={FavouritesScreen} />
      <Tab.Screen name="Notificaciones" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioStack from './InicioStack';
import PedidoStack from './PedidoStack';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Inicio') iconName = 'home';
        else if (route.name === 'Pedido') iconName = 'bicycle';
        else if (route.name === 'Search') iconName = 'search';
        else if (route.name === 'Account') iconName = 'person';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false
    })}>
      <Tab.Screen name="Inicio" component={InicioStack} />
      <Tab.Screen name="Pedido" component={PedidoStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

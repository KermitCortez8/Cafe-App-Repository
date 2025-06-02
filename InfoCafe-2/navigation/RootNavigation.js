// RootNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import DetailsScreen from '../screens/Inicio/DetailsScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Drawer sólo para las pantallas principales */}
      <RootStack.Screen name="Drawer" component={DrawerNavigator} />

      {/* Esta pantalla está fuera del Drawer */}
      <RootStack.Screen name="DetallesCafe" component={DetailsScreen} />
    </RootStack.Navigator>

  );
} 
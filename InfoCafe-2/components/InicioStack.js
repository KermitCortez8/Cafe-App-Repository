import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen';
import DetailsScreen from '../screens/Inicio/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function InicioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        headerStyle: { backgroundColor: '#4E1F00' },
        headerTintColor: '#F8F4E1',
      }}
    >
      <Stack.Screen 
        name="MenuPrincipal" 
        component={PrincipalViewScreen} 
        options={{ title: 'Menú Principal' }}
      />
      <Stack.Screen 
        name="DetallesCafe" 
        component={DetailsScreen} 
        options={{ title: 'Detalles del Café' }}
      />
    </Stack.Navigator>
  );
}
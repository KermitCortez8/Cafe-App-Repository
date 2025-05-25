import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PickupScreen from '../screens/Pedido/PickupScreen';
import DeliverScreen from '../screens/Pedido/DeliverScreen';
import MapScreen from '../screens/Pedido/MapScreen';

const Stack = createNativeStackNavigator();

export default function PedidoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        headerStyle: { backgroundColor: '#4E1F00' },
        headerTintColor: '#F8F4E1',
      }}
    >
      <Stack.Screen 
        name="Deliver" 
        component={DeliverScreen} 
        options={{ title: 'Dirección y Boleta' }}
      />
      <Stack.Screen 
        name="PickUp" 
        component={PickupScreen} 
        options={{ title: 'Pick Up' }}
      />
      <Stack.Screen 
        name="MapaEntrega" 
        component={MapScreen} 
        options={{ title: 'Mapa de Entrega' }}
      />
    </Stack.Navigator>
  );
}

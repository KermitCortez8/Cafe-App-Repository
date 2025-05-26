import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeliverScreen from '../screens/Pedido/DeliverScreen';
import PickupScreen from '../screens/Pedido/PickupScreen';
import MapScreen from '../screens/Pedido/MapScreen';
const Stack2 = createStackNavigator();
export default function PedidoStack() {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false }}>
      <Stack2.Screen name="Deliver" component={DeliverScreen} />
      <Stack2.Screen name="Pickup" component={PickupScreen} />
      <Stack2.Screen name="Map" component={MapScreen} />
    </Stack2.Navigator>
  );
}

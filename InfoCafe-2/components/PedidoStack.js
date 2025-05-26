import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens de la sección Pedido
import DeliverScreen from '../screens/Pedido/DeliverScreen';
import PickupScreen  from '../screens/Pedido/PickupScreen';
import MapScreen     from '../screens/Pedido/MapScreen';

const Stack = createNativeStackNavigator();

export default function PedidoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,                       // 🔒 Oculta el header por defecto
        // 🎨 Estilos listos por si activas el header en el futuro
        headerStyle: { backgroundColor: '#4E1F00' },
        headerTintColor: '#F8F4E1',
      }}
    >
      {/* Dirección de entrega y emisión de boleta */}
      <Stack.Screen
        name="DireccionBoleta"
        component={DeliverScreen}
        options={{ title: 'Dirección y Boleta' }}
      />

      {/* Punto de recogida (Pick Up) */}
      <Stack.Screen
        name="PickUp"
        component={PickupScreen}
        options={{ title: 'Pick Up' }}
      />

      {/* Mapa de entrega */}
      <Stack.Screen
        name="MapaEntrega"
        component={MapScreen}
        options={{ title: 'Mapa de Entrega' }}
      />
    </Stack.Navigator>
  );
}

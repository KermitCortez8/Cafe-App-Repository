// InicioStack.js
import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar pantallas
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen';
import DetailsScreen from '../screens/Inicio/DetailsScreen';  // Pantalla de detalles

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
        name="DetallesCafe"  // Asegúrate de que este nombre sea correcto
        component={DetailsScreen}
        options={{ title: 'Detalles del Café' }}
      />
    </Stack.Navigator>
  );
}

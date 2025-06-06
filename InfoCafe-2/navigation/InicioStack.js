import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen';
import DetailsScreen from '../screens/Inicio/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PrincipalView" component={PrincipalViewScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} 
      options={({ navigation }) => ({
        headerShown: false,
        // Esto deshabilita el gesto de abrir drawer deslizando
        gestureEnabled: false,
        // Esto bloquea el drawer cuando estés en Details
        swipeEnabled: false,
        // Y no muestra el icono de menú hamburguesa (si lo tienes)
        headerLeft: null,
      })}/>
      
    </Stack.Navigator>
  );
}

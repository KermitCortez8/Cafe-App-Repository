import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen';
import DetailsScreen from '../screens/Inicio/DetailsScreen';
const Stack = createStackNavigator();
export default function InicioStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Principal" component={PrincipalViewScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
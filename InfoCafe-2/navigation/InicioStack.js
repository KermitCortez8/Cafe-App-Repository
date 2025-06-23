import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrincipalViewScreen from '../screens/Inicio/PrincipalViewScreen';
import DetailsScreen from '../screens/Inicio/DetailsScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PrincipalView" component={PrincipalViewScreen} />
      <Stack.Screen name="Details" component={DetailsScreen}/>
      <Stack.Screen name="Perfil" component={AccountScreen}/>
      
    </Stack.Navigator>
  );
}

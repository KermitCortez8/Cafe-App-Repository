import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../../InfoCafe-2/navigation/BottomTabs';
import CustomHeader from '../../InfoCafe-2/componentes/HeaderPerso';
import AccountScreen from '../../InfoCafe-2/screens/AccountScreen';
import DetailsScreen from '../../InfoCafe-2/screens/Inicio/DetailsScreen'; // Pantalla Details
import SplashScreen from '../../InfoCafe-2/screens/SplashScreen'
import IntroScreen from '../../InfoCafe-2/screens/IntroScreen'

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="PrincipalView" component={BottomTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
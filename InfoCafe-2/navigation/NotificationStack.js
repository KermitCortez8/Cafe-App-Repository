import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../screens/Notificaciones/NotificationsScreen'; 
import PromotionScreen from '../screens/Notificaciones/PromotionScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function NotificationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={NotificationsScreen} /> 
      <Stack.Screen name="Promotion" component={PromotionScreen} />
      <Stack.Screen name="Perfil" component={AccountScreen}/>
    </Stack.Navigator>
  );
}
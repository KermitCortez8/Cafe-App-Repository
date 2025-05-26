import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Stacks y pantallas
import BottomTabs from './BottomTabs';
import NotificationsScreen from '../screens/NotificationsScreen';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,                             // Oculta el header en todas las pantallas
        drawerContentStyle: { backgroundColor: '#4E1F00' }, // Fondo del drawer
        drawerInactiveTintColor: 'white',               // Color de texto inactivo
        drawerActiveTintColor: '#74512D',               // Color de texto activo
        drawerActiveBackgroundColor: '#F8F4E1',         // Fondo de item activo
      }}
    >
      {/* Entrada principal al stack de pestañas */}
      <Drawer.Screen
        name="Inicio"
        component={BottomTabs}
        options={{ title: 'Inicio' }}
      />

      {/* Pantalla de notificaciones */}
      <Drawer.Screen
        name="Notificaciones"
        component={NotificationsScreen}
        options={{ title: 'Notificaciones' }}
      />

      {/* Perfil de usuario */}
      <Drawer.Screen
        name="Perfil"
        component={AccountScreen}
        options={{ title: 'Perfil' }}
      />
    </Drawer.Navigator>
  );
}

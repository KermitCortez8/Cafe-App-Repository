import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/AccountScreen';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // ✅ ocultar encabezado automático
        drawerContentStyle: { backgroundColor: '#4E1F00' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#74512D',
        drawerActiveBackgroundColor: '#F8F4E1',
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={BottomTabs}
      />
      <Drawer.Screen
        name="Perfil"
        component={AccountScreen}
        options={{ title: 'Perfil' }}
      />
    </Drawer.Navigator>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PrincipalViewScreen from './screens/PrincipalViewScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4E1F00',
          },
          headerTintColor: '#F8F4E1',
          drawerContentStyle: { backgroundColor: '#4E1F00' },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#74512D',
          drawerActiveBackgroundColor: '#F8F4E1',
        }}
      >
        <Drawer.Screen
          name="PrincipalView"
          component={PrincipalViewScreen}
          options={{ title: 'Principal View' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

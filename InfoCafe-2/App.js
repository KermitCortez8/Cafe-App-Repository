import React from 'react';
import StackHome from '../InfoCafe-2/navigation/InicioStack'
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from '../InfoCafe-2/store/store';

import DrawerNavigator from '../InfoCafe-2/navigation/DrawerNavigator';
import BottomTabs from '../InfoCafe-2/navigation/BottomTabs';
import RootNavigator from '../InfoCafe-2/navigation/RootStack';

export default function App() {
  return (

    <StoreProvider>
      <NavigationContainer>
         <RootNavigator/>
      </NavigationContainer>
    </StoreProvider>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../InfoCafe-2/navigation/RootNavigation';
import BottomTabs from './navigation/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator /> 
    </NavigationContainer>
  );
}

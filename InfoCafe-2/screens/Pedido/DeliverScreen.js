// DeliveryScreen.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { useStoreContext } from '../../../InfoCafe-2/store/store';
import { useNavigation } from '@react-navigation/native';
import DireccionInput from '../../componentes/DireccionInput';
import DecorativeBackground from '../../componentes/PantallaLayout';
import DeliveryToggle from '../../componentes/Toggle';
import ShoppingCart from '../../componentes/ShoppingCart';

export default function DeliveryScreen() {
  const { state } = useStoreContext();
  const navigation = useNavigation();

  return (
    <DecorativeBackground>
      <DeliveryToggle />
      <DireccionInput />
      <ShoppingCart orderType="Deliver" />
    </DecorativeBackground>
  );
}

const styles = StyleSheet.create({
  
});

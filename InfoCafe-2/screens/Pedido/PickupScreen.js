// DeliveryScreen.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { useStoreContext } from '../../../InfoCafe-2/store/store';
import { useNavigation } from '@react-navigation/native';
import DecorativeBackground from '../../componentes/PantallaLayout';
import DeliveryToggle from '../../componentes/Toggle';
import ShoppingCart from '../../componentes/ShoppingCart';

export default function DeliveryScreen() {
  const { state } = useStoreContext();
  const navigation = useNavigation();

  return (
    <DecorativeBackground>
      <DeliveryToggle />
      <ShoppingCart orderType="Pickup" />
    </DecorativeBackground>
  );
}

const styles = StyleSheet.create({
  // Puedes agregar estilos generales aquí si lo consideras necesario
});

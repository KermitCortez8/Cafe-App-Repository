import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo! Mapa</Text>

      <Button
        title="Ir a Deliver"
        onPress={() => navigation.navigate('Deliver')}
        color="#4E1F00"
      />

      <View style={{ height: 10 }} />

      <Button
        title="Ir a Pick Up"
        onPress={() => navigation.navigate('PickUp')}
        color="#4E1F00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 20,
  },
});

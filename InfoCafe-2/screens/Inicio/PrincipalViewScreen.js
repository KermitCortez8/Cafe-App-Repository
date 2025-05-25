import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PrincipalViewScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo! Principal</Text>
      <Button
        title="Ir a Detalles del Café"
        onPress={() => navigation.navigate('DetallesCafe')}
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
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 20,
  },
});
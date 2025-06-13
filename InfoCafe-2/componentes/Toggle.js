// DeliveryToggle.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DeliveryToggle() {
  const [selected, setSelected] = useState('Deliver'); // Valor por defecto
  const navigation = useNavigation();

  const handleDeliverPress = () => {
    setSelected('Deliver');
    // Nos quedamos en la vista "Deliver"
  };

  const handlePickUpPress = () => {
    setSelected('Pick Up');
    navigation.navigate('PickUp'); // Asegúrate que la ruta esté configurada correctamente
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selected === 'Deliver' && styles.buttonActive]}
        onPress={handleDeliverPress}
      >
        <Text style={[styles.buttonText, selected === 'Deliver' && styles.buttonTextActive]}>
          Deliver
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selected === 'Pick Up' && styles.buttonActive]}
        onPress={handlePickUpPress}
      >
        <Text style={[styles.buttonText, selected === 'Pick Up' && styles.buttonTextActive]}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',  // Contenedor blanco
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // Sombra para dar profundidad (opcional)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    width: '45%',             // Cada botón ocupa el 45% del ancho del contenedor
    paddingVertical: 16,       // Aumenta el tamaño vertical ligeramente
    borderRadius: 20,
    borderWidth: 0,            // Sin contorno
    backgroundColor: '#FFF',   // Fondo blanco cuando está inactivo
    alignItems: 'center',      // Centra el texto horizontalmente
  },
  buttonActive: {
    backgroundColor: '#4E1F00', // Fondo marrón para el botón activo
  },
  buttonText: {
    fontSize: 18,              // Texto grande
    color: '#4E1F00',          // Texto marrón cuando inactivo
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#FFF',            // Texto blanco para el botón activo
  },
});

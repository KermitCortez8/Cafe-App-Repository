// DireccionInput.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener instalada la librería
import { useStoreContext } from '../../InfoCafe-2/store/store'; // Ajusta la ruta según tu estructura

export default function DireccionInput() {
  const { state, setDeliveryAddress } = useStoreContext();
  const [direccion, setDireccion] = useState(state.deliveryAddress || '');

  useEffect(() => {
    setDireccion(state.deliveryAddress || '');
  }, [state.deliveryAddress]);

  const handleAddressChange = (text) => {
    setDireccion(text);
  };

  // Guarda la dirección cuando se pierde el foco o se presiona el botón
  const handleSubmit = () => {
    setDeliveryAddress(direccion);
  };

  // Muestra "Add Address" si aún no hay dirección, o "Edit Address" si ya la hay
  const buttonText = state.deliveryAddress ? 'Editar Direccion' : 'Agregar Direccion';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección de entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar direccion de entrega"
        placeholderTextColor="#aaa"
        value={direccion}
        onChangeText={handleAddressChange}
        onBlur={handleSubmit}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Ionicons name="location-outline" size={18} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,                  // Contenedor un poco más ancho
    backgroundColor: '#F8F8F8',  // Contenedor blanco
    alignSelf: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFFFFF',   // Nuevo fondo off-white, ligeramente diferente a blanco
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 0,             // Sin contorno
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',       // Ícono a la izquierda del texto
    backgroundColor: '#4E1F00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'flex-start',    // El botón ajusta su ancho al contenido
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 6,             // Separación entre el ícono y el texto
  },
});

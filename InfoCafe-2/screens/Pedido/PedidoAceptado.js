// screens/OrderConfirmationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useStoreContext } from '../../../InfoCafe-2/store/store';  // ← importamos el contexto

export default function OrderConfirmationScreen({ navigation }) {
  const { clearCart } = useStoreContext();        // ← extraemos clearCart

  return (
    <View style={styles.container}>
      {/* Icono de confirmación */}
      <Ionicons
        name="checkmark-circle-outline"
        size={96}
        color={styles.icon.color}
        style={styles.icon}
      />

      {/* Texto de éxito */}
      <Text style={styles.title}>¡Pedido Aprobado!</Text>
      <Text style={styles.subtitle}>
        Gracias por su compra. En breve comenzamos con la preparación.
      </Text>

      {/* Botón “Volver al inicio” */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          clearCart();  // ← vaciamos el carrito
          navigation.navigate('PrincipalView', {
            screen: 'Inicio',      
            params: { screen: 'PrincipalView' },
          });
        }}
      >
        <Text style={styles.homeButtonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    color: '#4E1F00',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  homeButton: {
    backgroundColor: '#4E1F00',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

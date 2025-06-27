import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LogoutButton({ onPress }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#4E1F00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function DecorativeBackground({ children }) {
  return (
    <View style={styles.container}>
      {/* Fondo visual dividido */}
      <View style={styles.background}>
        <View style={styles.top} />
        <View style={styles.bottom} />
      </View>

      {/* Contenido flotante sobre el fondo */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  top: {
    flex: 1,
    backgroundColor: '#4E1F00',
  },
  bottom: {
    flex: 3,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
});

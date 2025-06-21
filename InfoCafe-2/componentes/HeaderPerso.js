import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeaderTitle = ({ activeRouteName }) => {
  const subtitle = activeRouteName === 'PrincipalView' ? 'Inicio' : 'Mi Copa';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kopi Kap</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que el componente se adapte al espacio disponible
    backgroundColor: '#4E1F00', // Fondo marrón oscuro
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  title: {
    color: '#fff', // Letra blanca
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff', // Letra blanca
    fontSize: 15,
    marginTop: 2,
  },
});

export default CustomHeaderTitle;

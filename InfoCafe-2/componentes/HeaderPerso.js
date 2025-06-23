// CustomHeader.js
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { 
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeRouteName, setActiveRouteName] = useState('PrincipalView');

  useFocusEffect(
    useCallback(() => {
      let currentRouteName;
      // Si existe route.state, es probable que haya navegación anidada
      if (route.state && route.state.routes && route.state.routes.length) {
        currentRouteName = route.state.routes[route.state.index].name;
      } else {
        // Si no, usamos el nombre de la ruta actual
        currentRouteName = route.name;
      }
      setActiveRouteName(currentRouteName);
    }, [route])
  );

  // Mapeo de nombres de ruta a subtítulos (ajusta estos nombres según tu configuración de rutas)
  const subtitleMapping = {
    PrincipalView: 'Inicio',
    PickUp: 'Mi Copa',
    Deliver: 'Mi Copa',
    Favoritos: 'Favoritos',
    Perfil: 'Mi cuenta',
    Notificaciones: 'Notificaciones'
    // Si hay otros nombres de ruta, agrégalos aquí
  };

  // Si la ruta activa no coincide en el mapeo, se usa "Inicio" por defecto.
  const subtitle = subtitleMapping[activeRouteName] || 'Inicio';

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kopi Kap</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Ionicons
          name="person-circle-outline"
          size={35}
          color="#F8F4E1"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#4E1F00',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  titleContainer: {
    maxWidth: '80%',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    marginTop: 2,
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default CustomHeader;

import React from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeRouteName, setActiveRouteName] = React.useState(route.name || 'PrincipalView');

  useFocusEffect(
    React.useCallback(() => {
      let currentRouteName;
      if (route.state && route.state.routes && route.state.routes.length) {
        currentRouteName = route.state.routes[route.state.index].name;
      } else {
        currentRouteName = route.name;
      }
      setActiveRouteName(currentRouteName);
    }, [route])
  );

  // Mapeo de nombres de ruta a subtítulos (ajusta según tu configuración de rutas)
  const subtitleMapping = {
    PrincipalView: 'Inicio',
    PickUp: 'Mi Copa',
    Deliver: 'Mi Copa',
    Favoritos: 'Favoritos',
    Perfil: 'Mi Cuenta',
    Notifications: 'Notificaciones',
    MapaEntrega:'Mi Copa',
    Promotion:'Notificaciones',
  };

  const subtitle = subtitleMapping[activeRouteName] || 'Inicio';

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Configuramos la StatusBar para que tenga el mismo color */}
      <StatusBar backgroundColor="#4E1F00" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kopi Kap</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
         onPress={() =>
  navigation.navigate('Inicio', {
    screen: 'Perfil',
  })
}
        >
          <Ionicons
            name="person-circle-outline"
            size={35}
            color="#F8F4E1"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#4E1F00',
    paddingTop: 30, // Aumenta este valor para bajar más el contenido
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#4E1F00',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // El SafeAreaView se encarga de la zona de la status bar, así que aquí ya no necesitas marginTop
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

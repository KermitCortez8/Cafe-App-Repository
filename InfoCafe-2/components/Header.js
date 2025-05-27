import React from 'react';
 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity,Text, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native'
/**
 * Componente Header con botón para abrir drawer, título y acceso a perfil.
 */
export default function Header() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Botón para abrir el drawer */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>

        {/* Títulos principales */}
        <View>
          <Text style={styles.title}>Kopi Kap</Text>
          <Text style={styles.subtitle}>Home</Text>
        </View>

        {/* Botón para navegar a perfil */}
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Ionicons name="person-circle" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#4E1F00',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#F8F4E1',
    fontSize: 12,
  },
});

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function IntroScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.bottomBox}>
          <Text style={styles.title}>Mejora tu experiencia de café en Kopi Kap</Text>
          <Text style={styles.subtitle}>Donde el café se encuentra con la comodidad</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={styles.buttonText}>Empezar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomBox: {
    backgroundColor: 'rgba(78, 31, 0, 0.6)', // Marrón semitransparente
    height: height * 0.40,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 2,
    borderColor: '#4E1F00',
    borderStyle: 'dotted',
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 33, // Más grande
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 46,
    marginBottom: 12,
    numberOfLines: 3, // Limita a 3 líneas (esto se controla más en el componente)
  },
  subtitle: {
    color: '#fff',
    fontSize: 20, // Aumentado aún más
    textAlign: 'center',
    marginBottom: 40, // Más separación con el botón
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 20, // Más alto
    paddingHorizontal: 60, // Más ancho
    borderRadius: 30,
  },
  buttonText: {
    color: '#4E1F00',
    fontSize: 20, // Aumentado
    fontWeight: '700',
  },
});

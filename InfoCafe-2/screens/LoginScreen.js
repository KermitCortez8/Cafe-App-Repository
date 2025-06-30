// LoginScreen.js
// ▶︎ antes: expo install expo-linear-gradient react-native-svg

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Defs, ClipPath } from 'react-native-svg';
import app from '../Credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);
const { width: W, height: H } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Iniciando sesión', 'Accediendo...');
      navigation.navigate('PrincipalView');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  const waveHeight = H * 0.3;

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER con degradado y onda grande arriba */}
      <View style={[styles.headerWrapper, { height: waveHeight * 0.8 }]}>
        <LinearGradient
          colors={['#4E1F00', '#8B4513']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
        <Svg
          width={W}
          height={waveHeight}
          viewBox={`0 0 ${W} ${waveHeight}`}
          style={[styles.wave, { transform: [{ scaleY: -1 }] }]}
        >
          <Defs>
            <ClipPath id="clip">
              <Path
                d={`
                  M0,${waveHeight * 0.5}
                  C${W * 0.25},${waveHeight * 0.65}
                   ${W * 0.75},${waveHeight * 0.35}
                   ${W},${waveHeight * 0.5}
                  L${W},0 L0,0 Z
                `}
              />
            </ClipPath>
          </Defs>
          <Path
            clipPath="url(#clip)"
            fill="#fff"
            d={`
              M0,${waveHeight * 0.5}
              C${W * 0.25},${waveHeight * 0.65}
               ${W * 0.75},${waveHeight * 0.35}
               ${W},${waveHeight * 0.5}
              L${W},0 L0,0 Z
            `}
          />
        </Svg>
      </View>

      {/* CONTENIDO: título grande + formulario */}
      <View style={styles.content}>
        <Text style={styles.title}>Hola</Text>
        <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>

        <TextInput
          placeholder="correo@ejemplo.com"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={logueo}
        >
          <LinearGradient
            colors={['#8B4513', '#4E1F00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>INGRESAR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>¿No tienes cuenta?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  headerWrapper: { width: '100%', overflow: 'hidden' },
  wave: { position: 'absolute', top: -1, left: 0 },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 24,
    color: '#4E1F00',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 28,
  },
  buttonGradient: { paddingVertical: 14, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: {
    color: '#74512D',
    fontSize: 14,
    marginTop: 16,
    textDecorationLine: 'underline',
  },
  signupRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  signupText: { color: '#999', fontSize: 14 },
  signupLink: {
    color: '#74512D',
    fontSize: 14,
    marginLeft: 6,
    textDecorationLine: 'underline',
  },
});

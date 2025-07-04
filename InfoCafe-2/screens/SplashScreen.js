import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';


export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Intro');
    }, 7000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView 
        source={require('../../InfoCafe-2/assets/Animation - 1749040600839.json')} 
        autoPlay 
        loop 
        style={styles.animation}
      />
      <Text style={styles.text}>Kopi Kap</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
  width: 300,
  height: 300,
  },

  text: {
    color: 'white',
    fontSize: 34,
    marginTop: 16,
    fontWeight: 'bold'
  },
});

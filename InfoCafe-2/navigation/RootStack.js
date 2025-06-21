import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from '../../InfoCafe-2/screens/SplashScreen';
import IntroScreen from '../../InfoCafe-2/screens/IntroScreen';
import BottomTabs from '../../InfoCafe-2/navigation/BottomTabs';
import CustomHeaderTitle from '../../InfoCafe-2/componentes/HeaderPerso'; // Asegúrate de colocar la ruta correcta
import AccountScreen from '../../InfoCafe-2/screens/AccountScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Inicios"
        component={BottomTabs}
        options={({ route, navigation }) => {
          const activeRouteName = getFocusedRouteNameFromRoute(route) ?? 'PrincipalView';
          return {
            headerShown: true,
            headerStyle: {
              backgroundColor: '#4E1F00', // Fijamos el fondo del header para mayor coherencia
              shadowColor: 'transparent', // Quitamos la sombra (opcional)
            },
            headerTitle: () => (
              <CustomHeaderTitle activeRouteName={activeRouteName} />
            ),
            headerTitleAlign: 'left',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Perfil')}
                style={{ marginRight: 16 }}
              >
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#F8F4E1"
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Stack.Screen name="Perfil" component={AccountScreen} />
    </Stack.Navigator>
  );
}

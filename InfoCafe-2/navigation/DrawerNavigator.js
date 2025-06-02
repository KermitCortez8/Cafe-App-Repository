import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity,View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AccountScreen from '../screens/AccountScreen';
import BottomTabs from './BottomTabs';
import DetailsScreen from '../screens/Inicio/DetailsScreen';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4E1F00',
            elevation: 0, 
            shadowOpacity: 0, 
            borderBottomWidth: 0, // elimina línea inferior

        },
        headerTintColor: '#F8F4E1',

        drawerContentStyle: {
          backgroundColor: '#4E1F00',
        },

        drawerItemStyle: {
          borderBottomWidth: 0, // Quita divisores entre items
        },

        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#74512D',
        drawerActiveBackgroundColor: '#F8F4E1',
      }}
    >


      <Drawer.Screen
        name="Inicio"
        component={BottomTabs}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View>
              <Text style={{ color: '#F8F4E1', fontSize: 22, fontWeight: 'bold' }}>Kopi Kap</Text>
              <Text style={{ color: '#F8F4E1', fontSize: 15 }}>Inicio</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Perfil')}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="person-circle-outline" size={30} color="#F8F4E1" />
            </TouchableOpacity>
          ),
        })}
      />

      <Drawer.Screen
        name="Perfil"
        component={AccountScreen}
        options={{ title: 'Perfil' }}
      />

    </Drawer.Navigator>
  );
}

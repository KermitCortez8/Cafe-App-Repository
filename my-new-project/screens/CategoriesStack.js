import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './CategoriesScreen';
import CoffeeOverviewScreen from './CoffeeOverviewScreen';
import CoffeeDetailsScreen from './CoffeeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function CategoriesStack({
  navigation,
  favoriteMealIds,
  addFavorite,
  removeFavorite,
}) {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: '#006400' },
        headerTintColor: 'white',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginRight: 16 }}
          >
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'All Categories' }}
      />
      <Stack.Screen
        name="CoffeeOverview"
        component={CoffeeOverviewScreen}
        options={{ title: 'Coffees' }}
      />
      <Stack.Screen
        name="CoffeeDetails"
        children={props => (
          <CoffeeDetailsScreen
            {...props}
            favoriteMealIds={favoriteMealIds}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        )}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PerfilScreen from './screens/PerfilScreen';
import ConfigScreen from './screens/ConfigScreen';
import SobreScreen from './screens/SobreScreen';
import ContatoScreen from './screens/ContatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Stack.Screen
          name="Config"
          component={ConfigScreen}
        />

        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
        />

        <Stack.Screen
          name="Contato"
          component={ContatoScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
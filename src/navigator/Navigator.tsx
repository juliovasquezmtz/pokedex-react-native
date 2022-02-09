import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Pokemon} from '../screens/Pokemon';

import {SinglePokemon} from '../interfaces/Interfaces';

export type RootStackParams = {
  Home: undefined;
  Pokemon: {
    singlePokemon: SinglePokemon;
    color: string;
    picture: string;
  };
};

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

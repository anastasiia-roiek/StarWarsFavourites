// app.js
import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './screens/Main';
import Details from './screens/Details';

import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
        />

      <Stack.Screen 
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Customdog from './components/CustomDog';
import Values from './components/Values';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Intro1" component={Intro1} options={{headerShown: false}}/>
        <Stack.Screen name="Intro2" component={Intro2} options={{headerShown: false}}/>
        <Stack.Screen name="Values" component={Values} options={{headerShown: false}}/>
        <Stack.Screen name="CustomDog" component={Customdog} options={{headerShown: false}}/>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

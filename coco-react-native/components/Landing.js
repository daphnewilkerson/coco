import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';

export default function Landing() {

  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Pressable style={styles.landingButton}>
        <Text style={styles.landingButtonText}>Fetch Info</Text>
      </Pressable>
      <Pressable style={styles.landingButton}>
        <Text style={styles.landingButtonText}>Compare Items</Text>
      </Pressable>
      <Pressable style={styles.landingButton}>
        <Text style={styles.landingButtonText}>Sniff Receipt</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f1',
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 105,
    marginTop: 100,
    marginBottom: 50,
  },
  landingButton: {
    backgroundColor: '#93d075',
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  landingButtonText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  }
});
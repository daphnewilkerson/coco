import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import Dog1 from './dogs/dog1';
import {Video, AVPlaybackStatus} from 'expo-av';

export default function Intro() {
  const navigation = useNavigation();
  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <View style={styles.container}>
          <Pressable style={styles.leftCornerButton} onPress={()=> navigation.navigate('Intro1')}>
            <Text style={styles.cornerText}>{'<'} back</Text>
          </Pressable>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={styles.bigText}>My name is CoCo</Text>
          <Text style={styles.mediumText}>(short for Concious Consumer)</Text>
          <Text style={styles.moremediumText}>and I'm here to give you information and feedback about all things ethics!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('CustomDog')}>
            <Text style={styles.smallText}>click to continue</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <Dog1 style={styles.dog}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f1ff',
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 105,
    marginTop: 100,
    marginBottom: 50,
  },
  coco: {
    width: 115,
    height: 250,
    marginTop: 100,
    marginBottom: 50,
  },
  bigText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediumText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  moremediumText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  smallText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dog: {
    position: 'absolute',
    bottom: 0,
  },
  video: {
    backgroundColor: "red",
    width: 500,
    height: 500,
  },
  button: {
    backgroundColor: '#93d075ff',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  leftCornerButton: {
    backgroundColor: '#f9f9f1ff',
    width: 100,
    height: 50,
    position: 'absolute',
    left: 25,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
});
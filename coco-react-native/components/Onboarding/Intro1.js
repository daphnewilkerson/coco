import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, MAINFONT, BOLDFONT, } from '.../../utils/constants';

export default function Intro() {
  const navigation = useNavigation();


  return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={styles.bigText}>Welcome to CoCo!</Text>
          <Text style={styles.mediumText}>Let me show you around!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro2')}>
            <Text style={styles.smallText}>click to continue</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <Image style={styles.dog} source={require('../assets/dogs/dog1.png')}/>
          {/* <Dog1 style={styles.dog}/> */}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dog: {
    width: 221,
    height: 281,
    position: 'absolute',
    bottom: 0,
  },
  video: {
    backgroundColor: "red",
    width: 500,
    height: 500,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});
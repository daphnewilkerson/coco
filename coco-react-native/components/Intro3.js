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
import { COLORS } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

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
          <Pressable style={styles.leftCornerButton} onPress={()=> navigation.navigate('Intro2')}>
            <Text style={styles.cornerText}>{'<'} back</Text>
          </Pressable>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={styles.moremediumText}>This is your home button! Tapping it will always bring you back to your home page.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro4')}>
            <Text style={styles.smallText}>click to continue</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <Dog1 style={styles.dog}/>
          <Icon name="arrow-down" size='150' style={{color: COLORS.darkGreen, marginTop: 60}}/>
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
  moremediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 180,
    marginLeft: 25,
    marginRight: 25,
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dog: {
    position: 'absolute',
    left: -60,
    top: 160,
    transform: [{ rotate: '50deg' }]
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
  },
  leftCornerButton: {
    backgroundColor: COLORS.background,
    width: 100,
    height: 50,
    position: 'absolute',
    left: 25,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
});
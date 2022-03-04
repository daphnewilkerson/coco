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
import { COLORS, Back } from '../utils/constants';
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
          <Back/>
          <Text style={styles.moremediumText}>This is CoCo's profile button! You can update CoCo's look, and view CoCo Bones earned by shopping ethically.</Text>
          <Text style={styles.mediumText}>Let's start by customizing CoCo's look! Click on CoCo's profile to continue.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('CustomDog')}>
            <Text style={styles.smallText}>click to customize CoCo</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <Dog1 style={styles.dog}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, marginTop: 75, marginLeft: 270}}/>
          
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
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
    textAlign: 'right',
    marginTop: 220,
    marginLeft: 50,
    marginRight: 25,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'right',
    marginTop: 55,
    marginLeft: 50,
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
    left: 15,
    bottom: -170,
  },
  video: {
    backgroundColor: "red",
    width: 500,
    height: 500,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 25,
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
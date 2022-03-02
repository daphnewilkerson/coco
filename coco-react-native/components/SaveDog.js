import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS } from '../utils/constants';
import Dog1 from './dogs/dog1';
import Dog2 from './dogs/dog2';
import Dog3 from './dogs/dog3';
import Dog4 from './dogs/dog4';
import Dog5 from './dogs/dog5';
import Dog6 from './dogs/dog6';
import Dog7 from './dogs/dog7';
import Dog8 from './dogs/dog8';
import Dog9 from './dogs/dog9';

export default function Intro({route}) {
  const navigation = useNavigation();
  const { dognum} = route.params;
  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let arr = [<Dog1/>, <Dog2/>, <Dog3/>, <Dog4/>, <Dog5/>, <Dog6/>, <Dog7/>, <Dog8/>, <Dog9/>];
  let SelectedDog = arr[dognum];
  return (
      <View style={styles.container}>
          <Pressable style={styles.leftCornerButton} onPress={()=> navigation.navigate('CustomizeDog')}>
            <Text style={styles.cornerText}>{'<'} back</Text>
          </Pressable>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={styles.bigText}>CoCo loves their new look!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro4')}>
            <Text style={styles.smallText}>click to continue tutorial</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <SelectedDog style={styles.dog}/>
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
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
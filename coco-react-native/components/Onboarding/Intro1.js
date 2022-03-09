import 'react-native-gesture-handler';
import * as React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import AppLoading from 'expo-app-loading';
import { COLORS, MAINFONT, BOLDFONT, dogimages, UserContext} from '../../utils/constants';


export default function Intro() {
  const navigation = useNavigation();
  const { dogNum } = useContext(UserContext);


  return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/logo.png')}/>
          <Text numberOfLines={2} adjustsFontSizeToFit style={styles.bigText}>Welcome to CoCo!</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.mediumText}>Let me show you around!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro2')}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to continue</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <Image style={styles.dog} source={dogimages[dogNum]}/>
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
    width: '24%',
    height: '10%',
    marginTop: '20%',
  },
  bigText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 45,
    fontWeight: 'bold',
    //marginBottom: '5%',
    padding: '5%',
    textAlign: 'center',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  dog: {
    width: '54%',
    height: undefined,
    aspectRatio: 221/281,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});
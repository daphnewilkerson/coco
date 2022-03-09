import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useContext } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, MAINFONT, BOLDFONT, Back, dogimages, UserContext } from '../../utils/constants';

export default function Intro() {
  const navigation = useNavigation();
  const { dogNum } = useContext(UserContext);

  return (
      <View style={styles.container}>
          <Back/>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.bigText}>My name is CoCo</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.mediumText}>(short for Concious Consumer)</Text>
          <Text numberOfLines={3} adjustsFontSizeToFit style={styles.moremediumText}>and I'm here to give you information and feedback about all things ethics!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro3')}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to continue</Text>
          </Pressable>
          <Image style={styles.dog} source={dogimages[dogNum]}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  bigText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 45,
    fontWeight: 'bold',
    padding: '5%',
    textAlign: 'center',
    marginTop: '30%',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    paddingLeft: '5%',
    paddingRight: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moremediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    fontWeight: 'bold',
    padding: '10%',
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
    height: '34%',
    resizeMode: 'contain',
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
  },
});
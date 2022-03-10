import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, MAINFONT, BOLDFONT, Back, dogimages, UserContext } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Intro() {
  const navigation = useNavigation();
  const { dogNum } = useContext(UserContext);

  return (
      <View style={styles.container}>
          <Back/>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.mediumText}>Here is your home button!</Text>
          <Text numberOfLines={4} adjustsFontSizeToFit style={styles.moremediumText}>You can fetch information about brands, compare brands or items, and scan your receipts to earn rewards here!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro4')}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to continue</Text>
          </Pressable>
          <Image style={styles.dog} source={dogimages[dogNum]}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, position: 'absolute', bottom: -20}}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: '100%',
    marginLeft: 25,
    marginRight: 25,
  },
  moremediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
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
    position: 'absolute',
    left: -60,
    top: '20%',
    transform: [{ rotate: '50deg' }],
    width: '54%',
    height: undefined,
    aspectRatio: 221/281,
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
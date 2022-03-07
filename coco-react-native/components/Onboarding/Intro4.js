import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, MAINFONT, BOLDFONT, Back } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Intro() {
  const navigation = useNavigation();


  return (
      <View style={styles.container}>
          <Back/>
          <Text style={styles.moremediumText}>Here is CoCo's profile button! </Text>
          <Text style={styles.mediumText}>You can update CoCo's look and view CoCo Bones earned by shopping ethically.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro5')}>
            <Text style={styles.smallText}>click to continue</Text>
          </Pressable>
          <Image style={styles.dog} source={require('../../assets/dogs/dog1.png')}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, marginTop: 180, marginLeft: 270}}/>
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
    fontFamily: BOLDFONT,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'right',
    marginTop: 300,
    marginLeft: 20,
    marginRight: 15,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'right',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 15,
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dog: {
    position: 'absolute',
    left: 15,
    bottom: -170,
    width: 221,
    height: 281,
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
    fontFamily: MAINFONT,
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 0,
  },
});
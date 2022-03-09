import 'react-native-gesture-handler';
import React, {
  useContext
} from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext, dogimages } from '../utils/constants';

export default function Intro({route}) {
  const navigation = useNavigation();

  const { dogNum } = useContext(UserContext);

  let valuearr = ["Sustainability", "Paid Maternity Leave", "Diversity and Inclusion", "Accessibility", "Wages", "Health Care for Workers", "Anti-Child Labor Polocies", "Charity", "Workers' Rights", "Anti-Discrimination", "Animal Cruelty/Testing", "LGBTQ+ Rights", "COVID-19 Policies", "Ability to Unionize", "Reduced Water Use", "Transparency", "Greenwashing", "Eco-Friendly", "Supporting POC Owned Businesses", "Women's Rights", "Privacy"];
  
  return (
      <View style={styles.container}>
          <Back/>
          <Text numberOfLines={2} adjustsFontSizeToFit style={styles.bigText}>Thanks for sharing your values!</Text>
          <Text numberOfLines={3} adjustsFontSizeToFit style={styles.mediumText}>You can always go back and update your values through your profile page.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('MainApp')}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to launch app!</Text>
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
  coco: {
    width: 115,
    height: 250,
    marginTop: 100,
    marginBottom: 50,
  },
  bigText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    padding: 15,
    marginTop: '40%',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
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
    width: '54%',
    height: undefined,
    aspectRatio: 221/281,
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
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  leftCornerButton: {
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex: 2, 
    elevation: 2
  },
  cornerText: {
    fontFamily: MAINFONT,
    fontSize: 20,
    color: COLORS.darkGreen
  },
});
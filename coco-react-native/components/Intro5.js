import 'react-native-gesture-handler';
import React, {
  useContext
} from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, Back, UserContext, dogimages } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Intro({route}) {
    const navigation = useNavigation();
    const { dogNum } = useContext(UserContext);
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
          <Text style={styles.moremediumText}>This is your profile button, where you can update your values, and view favorited stores, saved articles, and recent purchases.</Text>
          <Text style={styles.mediumText}>Let's add your values! Click on your profile to continue.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Values')}>
            <Text style={styles.smallText}>click to add values</Text>
          </Pressable>
          <Image style={styles.dog} source={dogimages[dogNum]}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, marginTop: 70, marginRight: 270}}/>
          
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
    marginBottom: 40,
    textAlign: 'left',
    marginTop: 220,
    marginLeft: 25,
    marginRight: 50,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'left',
    marginTop: 30,
    marginRight: 50,
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
    right: 15,
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
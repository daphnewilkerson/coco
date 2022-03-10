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
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext, dogimages } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Intro({route}) {
    const navigation = useNavigation();
    const { dogNum } = useContext(UserContext);

  
  return (
      <View style={styles.container}>
          <Back/>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.moremediumText}>Here is your profile button!</Text>
          <Text numberOfLines={3} adjustsFontSizeToFit style={styles.mediumText}>You can update your values, and view favorited stores, saved articles, and recent purchases.</Text>
          <Text numberOfLines={2} adjustsFontSizeToFit style={styles.smallerText}>Let's add your values so CoCo can tailor information to you!</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Values', {nextPage: 'SaveValues'})}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to add values</Text>
          </Pressable>
          <Image style={styles.dog} source={dogimages[dogNum]}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, position: 'absolute', bottom: -20, left: '-3%'}}/>
          
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  moremediumText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '50%',
    padding: '3%'
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '3%'
  },
  smallerText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '3%',
    marginBottom: 10,
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  dog: {
    position: 'absolute',
    right: 15,
    bottom: '-22%',
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
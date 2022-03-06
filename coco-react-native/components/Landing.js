import 'react-native-gesture-handler';
import * as React from 'react';
import {
  useContext
} from 'react';
import { Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, BOLDFONT, dogimages, UserContext } from '../utils/constants';


export default function Landing() {

  const navigator = useNavigation();
  const { dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('Fetch1')}>
        <Text style={styles.landingButtonText}>Fetch Info</Text>
      </Pressable>
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('CompareMain')}>
        <Text style={styles.landingButtonText}>Compare Items</Text>
      </Pressable>
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('Sniff1')}>
        <Text style={styles.landingButtonText}>Sniff Receipt</Text>
      </Pressable>
      <Image
        style={styles.dog}
        source={dogimages[dogNum]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 250
  },
  logo: {
    width: 125,
    height: 105,
    top: 100,
    position: 'absolute'
  },
  landingButton: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  landingButtonText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 20,
  },
  dog: {
    height: 230,
    resizeMode: 'contain',
    marginTop: 'auto',
    marginBottom: -3,
  }
});
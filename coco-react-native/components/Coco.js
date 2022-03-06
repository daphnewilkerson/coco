import 'react-native-gesture-handler';
import * as React from 'react';
import {
  useContext
} from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, BOLDFONT, UserContext, dogimages } from '../utils/constants';


export default function Landing() {

  const navigation = useNavigation();
  const { dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        CoCo
      </Text>
      <Pressable style={styles.landingButton} onPress={() => navigation.navigate('CustomDog')}>
        <Text style={styles.landingButtonText}>Customize CoCo</Text>
      </Pressable>
      <Pressable style={styles.landingButton} >
        <Text style={styles.landingButtonText}>CoCo Bones</Text>
      </Pressable>
      <Image
        style={[styles.dog, {
          transform: [
            { rotate: "45deg" }
          ]
        }]}
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
    paddingTop: 100
  },
  title: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 45,
    marginBottom: 100
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
    height: 250,
    resizeMode: 'contain',
    marginTop: 'auto',
    marginBottom: -3,
    right: 180,
  }
});
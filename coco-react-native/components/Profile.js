import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, UserContext, dogimages } from '../utils/constants';


export default function Landing() {

  const navigator = useNavigation();
  const { dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile
      </Text>
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('Bookmarks')}>
        <Text style={styles.landingButtonText}>Bookmarks</Text>
      </Pressable>
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('Bookmarks')}>
        <Text style={styles.landingButtonText}>Values</Text>
      </Pressable>
      <Pressable style={styles.landingButton} onPress={() => navigator.navigate('Bookmarks')}>
        <Text style={styles.landingButtonText}>Recently Purchases</Text>
      </Pressable>
      <Image
        style={[styles.dog, {
          transform: [
            { rotate: "-45deg" }
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
    fontFamily: MAINFONT,
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
    fontFamily: MAINFONT,
    fontSize: 20,
  },
  dog: {
    height: 250,
    resizeMode: 'contain',
    marginTop: 'auto',
    marginBottom: -3,
    left: 180,
  }
});
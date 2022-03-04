import 'react-native-gesture-handler';
import React, {
  useContext
} from 'react';
import { Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import { COLORS, Back, UserContext} from '../utils/constants';


export default function Intro() {

  const navigation = useNavigation();

  const { dogNum, setDogNum } = useContext(UserContext);

  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let arr = ['../assets/dogs/dog1', '../assets/dogs/dog2', '../assets/dogs/dog3', '../assets/dogs/dog4', '../assets/dogs/dog5', '../assets/dogs/dog6', '../assets/dogs/dog7', '../assets/dogs/dog8', '../assets/dogs/dog9'];

  return (
    <View style={styles.container}>
        <Back/>
        <Pressable style={styles.rightCornerButton} onPress={() => navigation.navigate('SaveDog')}>
            <Text style={styles.cornerText}>save</Text>
        </Pressable>
        <Text style={styles.mediumText}>Customize CoCo!</Text>
        <ScrollView 
          horizontal={true} 
          decelerationRate={0} 
          snapToInterval={300} 
          style={styles.scroll} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 50, paddingRight: 110}}
          >
            {
                arr.map((dog, index) => (
                    <View style={styles.stack} key={index}>
                        {dog}
                        <Pressable onPress={() => setDogNum(index)} style={dogNum === index ? styles.selectedButton : styles.unselectedButton}>
                        {
                            dogNum === index ?
                            <Text style={styles.selectedButtonText}>Selected</Text>
                            :
                            <Text style={styles.unselectedButtonText}>Select</Text>
                        }
                        </Pressable>
                    </View>
                ))
            }
        </ScrollView> 
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
  dog: {
      width: 221,
      height: 281,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
    marginTop: 160,
  },
  unselectedButton: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  unselectedButtonText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  selectedButton: {
    backgroundColor: COLORS.darkGreen,
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  selectedButtonText: {
    color: COLORS.lightGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
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
  rightCornerButton: {
    backgroundColor: COLORS.background,
    width: 100,
    height: 50,
    position: 'absolute',
    right: 25,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  scroll: {
    backgroundColor: COLORS.background,
  },
  stack: {
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
});
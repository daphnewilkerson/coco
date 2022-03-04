import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import {Video, AVPlaybackStatus} from 'expo-av';
import { COLORS, Back } from '../utils/constants';
import Dog1 from './dogs/dog1';
import Dog2 from './dogs/dog2';
import Dog3 from './dogs/dog3';
import Dog4 from './dogs/dog4';
import Dog5 from './dogs/dog5';
import Dog6 from './dogs/dog6';
import Dog7 from './dogs/dog7';
import Dog8 from './dogs/dog8';
import Dog9 from './dogs/dog9';

export default function Intro({route}) {
  const navigation = useNavigation();
  const { dognum, selected} = route.params;
  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let valuearr = ["Sustainability", "Paid Maternity Leave", "Diversity and Inclusion", "Accessibility", "Wages", "Health Care for Workers", "Anti-Child Labor Polocies", "Charity", "Workers' Rights", "Anti-Discrimination", "Animal Cruelty/Testing", "LGBTQ+ Rights", "COVID-19 Policies", "Ability to Unionize", "Reduced Water Use", "Transparency", "Greenwashing", "Eco-Friendly", "Supporting POC Owned Businesses", "Women's Rights", "Privacy"];
  let dogarr = [<Dog1/>, <Dog2/>, <Dog3/>, <Dog4/>, <Dog5/>, <Dog6/>, <Dog7/>, <Dog8/>, <Dog9/>];
  let SelectedDog = (props)=> (
      <View style={props.style}>
      {dogarr[dognum]}
      </View>
  )
  return (
      <View style={styles.container}>
          <Back/>
          <Text style={styles.bigText}>Thanks for sharing your values!</Text>
          <Text style={styles.mediumText}>You can always go back and update your values through your profile page.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Landing', {dognum: dognum})}>
            <Text style={styles.smallText}>click to launch app!</Text>
          </Pressable>
          {/* <Video source={require("../assets/sniff.mov")} shouldPlay={true} style={styles.video}/> */}
          <SelectedDog style={styles.dog}/>
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
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 200,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { COLORS, MAINFONT, BOLDFONT, Back, dogimages, UserContext } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Intro() {
  const navigation = useNavigation();
  const { dogNum } = useContext(UserContext);


  return (
      <View style={styles.container}>
          <Back/>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.moremediumText}>Here is CoCo's profile button! </Text>
          <Text numberOfLines={3} adjustsFontSizeToFit style={styles.mediumText}>You can update CoCo's look and view CoCo Bones earned by shopping ethically.</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Intro5')}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.smallText}>click to continue</Text>
          </Pressable>
          <Image style={styles.dog} source={dogimages[dogNum]}/>
          <Icon name="arrow-down" size={150} style={{color: COLORS.darkGreen, marginTop: '45%', marginLeft: '65%'}}/>
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
    marginBottom: 0,
    textAlign: 'right',
    marginTop: '70%',
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
    padding: 10,
  },
  dog: {
    position: 'absolute',
    left: 15,
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
    marginTop: 25,
  },
});
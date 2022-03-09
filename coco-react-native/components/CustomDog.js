import 'react-native-gesture-handler';
import React, {
  useContext
} from 'react';
import { Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext, dogimages} from '../utils/constants';


export default function Intro() {

  const navigation = useNavigation();

  const { dogNum, setDogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
        <Back/>
        <Pressable style={styles.rightCornerButton} onPress={() => navigation.navigate('CoCoMain')}>
            <Text style={styles.cornerText}>save</Text>
        </Pressable>
        <Text style={styles.mediumText}>Customize CoCo!</Text>
        <Text style={styles.smallText}>(Swipe to see options!)</Text>
        <ScrollView 
          horizontal={true} 
          decelerationRate={0} 
          snapToInterval={Dimensions.get('window').width} 
          style={styles.scroll} 
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{ marginLeft: 50, paddingRight: 110}}
          >
            {
                dogimages.map((dog, index) => (
                    <View style={styles.stack} key={index}>
                        <Image style={styles.dog} source={dog}/>
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
      resizeMode: 'contain'
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: '10%',
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
    fontFamily: BOLDFONT,
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
    fontFamily: BOLDFONT,
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
    fontFamily: MAINFONT,
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  scroll: {
    backgroundColor: COLORS.background,
  },
  stack: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});
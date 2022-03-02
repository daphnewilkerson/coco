import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import Dog1 from './dogs/dog1';
import Dog2 from './dogs/dog2';
import Dog3 from './dogs/dog3';
import Dog4 from './dogs/dog4';
import Dog5 from './dogs/dog5';
import Dog6 from './dogs/dog6';
import Dog7 from './dogs/dog7';
import Dog8 from './dogs/dog8';
import Dog9 from './dogs/dog9';

export default function Intro() {

  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  const [selected, setSelected] = useState(1);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let arr = [<Dog1/>, <Dog2/>, <Dog3/>, <Dog4/>, <Dog5/>, <Dog6/>, <Dog7/>, <Dog8/>, <Dog9/>];

  return (
    <View style={styles.container}>
        <Pressable style={styles.leftCornerButton}>
            <Text style={styles.cornerText}>{'<'} back</Text>
        </Pressable>
        <Pressable style={styles.rightCornerButton}>
            <Text style={styles.cornerText}>save</Text>
        </Pressable>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
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
                        <Pressable onPress={() => setSelected(index)} style={selected === index ? styles.selectedButton : styles.unselectedButton}>
                        {
                            selected === index ?
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
    backgroundColor: '#f9f9f1ff',
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 105,
    marginTop: 100,
    marginBottom: 50,
  },
  coco: {
    width: 115,
    height: 250,
    marginTop: 100,
    marginBottom: 50,
  },
  mediumText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  unselectedButton: {
    backgroundColor: '#93d075ff',
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  unselectedButtonText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  selectedButton: {
    backgroundColor: '#07500A',
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  selectedButtonText: {
    color: '#93d075ff',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  leftCornerButton: {
    backgroundColor: '#f9f9f1ff',
    width: 100,
    height: 50,
    position: 'absolute',
    left: 25,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCornerButton: {
    backgroundColor: '#f9f9f1ff',
    width: 100,
    height: 50,
    position: 'absolute',
    right: 25,
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerText: {
    color: '#07500A',
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
  },
  scroll: {
    backgroundColor: '#f9f9f1ff',
  },
  stack: {
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#f9f9f1ff',
    alignItems: 'center',
  },
});
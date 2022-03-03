import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import { COLORS } from '../utils/constants';



export default function Intro() {

    // Load fonts. Return expo loading screen if not loaded
    let [fontsLoaded] = useFonts({
      Comfortaa_400Regular,
    });
  
    const [selected, setSelected] = useState([]);
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    function handleSelection(index) {
        let copy = [...selected];
        if (copy.includes(index)) {
            var loc = copy.indexOf(index);
            if (loc > -1) {
                copy.splice(loc, 1);
            }
        } else {
            copy.push(index);
        }
        console.log(copy);
        setSelected(copy);
    }
    let arr = ["Sustainability", "Paid Maternity Leave", "Diversity and Inclusion", "Accessibility", "Wages", "Health Care for Workers", "Anti-Child Labor Polocies", "Charity", "Workers' Rights", "Anti-Discrimination", "Animal Cruelty/Testing", "LGBTQ+ Rights", "COVID-19 Policies", "Ability to Unionize", "Reduced Water Use", "Transparency", "Greenwashing", "Eco-Friendly", "Supporting POC Owned Businesses", "Women's Rights", "Privacy"];
  
    return (
      <View style={styles.container}>
          <Pressable style={styles.leftCornerButton}>
              <Text style={styles.cornerText}>{'<'} back</Text>
          </Pressable>
          <Pressable style={styles.rightCornerButton}>
              <Text style={styles.cornerText}>save</Text>
          </Pressable>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <Text style={styles.mediumText}>What is most important to you?</Text>
          <ScrollView style={styles.scroll}>
              {
                  arr.map((value, index) => (
                        <View style={styles.stack} key={index}>
                          <Pressable onPress={() => handleSelection(index)} style={selected.includes(index) ? styles.selectedButton : styles.unselectedButton}>
                          {
                              selected.includes(index) ?
                              <Text style={styles.selectedButtonText}>{value}</Text>
                              :
                              <Text style={styles.unselectedButtonText}>{value}</Text>
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
  logo: {
    width: 125,
    height: 105,
    marginTop: 100,
    marginBottom: 50,
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  unselectedButton: {
    backgroundColor: '#93d075ff',
    width: '45%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 5,
  },
  unselectedButtonText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: COLORS.darkGreen,
    width: '45%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 5,
  },
  selectedButtonText: {
    color: COLORS.lightGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 18,
    textAlign: 'center',
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
    backgroundColor: 'pink',
  },
  stack: {
    backgroundColor: 'pink',
    width: 400,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'space-around',
  },
});
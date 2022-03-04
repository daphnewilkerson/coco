import 'react-native-gesture-handler';
import * as React from 'react';
import { Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList} from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import { COLORS, Back } from '../utils/constants';



export default function Intro({route}) {
    const navigation = useNavigation();
    const { dognum } = route.params;

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
    const DATA = [{id: 0, value: "Sustainability"}, {id: 1, value: "Paid Maternity Leave"}, {id: 2, value: "Diversity and Inclusion"}, {id: 3, value: "Accessibility"}, {id: 4, value: "Wages"}, {id: 5, value: "Health Care for Workers"}, {id: 6, value: "Anti-Child Labor Polocies"}, {id: 7, value: "Charity"}, {id: 8, value: "Workers' Rights"}, {id: 9, value: "Anti-Discrimination"}, {id: 10, value: "Animal Cruelty/Testing"}, {id: 11, value: "LGBTQ+ Rights"}, {id: 12, value: "COVID-19 Policies"}, {id: 13, value: "Ability to Unionize"}, {id: 14, value: "Reduced Water Use"}, {id: 15, value: "Transparency"}, {id: 16, value: "Greenwashing"}, {id: 17, value: "Eco-Friendly"}, {id: 18, value: "Supporting POC Owned Businesses"}, {id: 19, value: "Women's Rights"}, {id: 20, value: "Privacy"}];
  
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <Pressable onPress={onPress} style={[styles.button, backgroundColor]}>
          <Text style={[styles.value, textColor]}>{item.value}</Text>
        </Pressable>
      );

    const renderItem = ({ item }) => {
        const backgroundColor = selected.includes(item.id) ? COLORS.darkGreen : COLORS.lightGreen;
        const color = selected.includes(item.id) ? COLORS.lightGreen : COLORS.darkGreen;
    
        return (
        <Item
            item={item}
            onPress={() => handleSelection(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
        );
    };


    return (
      <View style={styles.container}>
          <Back/>
          <Pressable style={styles.rightCornerButton} onPress={()=> navigation.navigate('SaveValues', {dognum: dognum, selected: selected})}>
              <Text style={styles.cornerText}>save</Text>
          </Pressable>
          <Text style={styles.mediumText}>What is most important to you?</Text>
          <FlatList
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selected}
            numColumns={2}
          />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  mediumText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 115,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#93d075ff',
    width: '47%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 5,
  },
  value: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 18,
    textAlign: 'center',
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
});
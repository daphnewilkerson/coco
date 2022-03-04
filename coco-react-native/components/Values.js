import 'react-native-gesture-handler';
import React, {
  Component,
  useState,
  useContext
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList, TextInput} from 'react-native';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import { COLORS, Back, MAINFONT, allValues, UserContext } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';




export default function Intro({route}) {

    const { values, addValue, removeValue } = useContext(UserContext);

    const navigation = useNavigation();

    const [search, setSearch] = useState('');

    // const DATA = [{id: 0, value: "Sustainability"}, {id: 1, value: "Paid Maternity Leave"}, {id: 2, value: "Diversity and Inclusion"}, {id: 3, value: "Accessibility"}, {id: 4, value: "Wages"}, {id: 5, value: "Health Care for Workers"}, {id: 6, value: "Anti-Child Labor Polocies"}, {id: 7, value: "Charity"}, {id: 8, value: "Workers' Rights"}, {id: 9, value: "Anti-Discrimination"}, {id: 10, value: "Animal Cruelty/Testing"}, {id: 11, value: "LGBTQ+ Rights"}, {id: 12, value: "COVID-19 Policies"}, {id: 13, value: "Ability to Unionize"}, {id: 14, value: "Reduced Water Use"}, {id: 15, value: "Transparency"}, {id: 16, value: "Greenwashing"}, {id: 17, value: "Eco-Friendly"}, {id: 18, value: "Supporting POC Owned Businesses"}, {id: 19, value: "Women's Rights"}, {id: 20, value: "Privacy"}];
    const [results, setResults] = useState(allValues);

    // Load fonts. Return expo loading screen if not loaded
    let [fontsLoaded] = useFonts({
      Comfortaa_400Regular,
    });
  
    // const [selected, setSelected] = useState([]);
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }

    const handleSearch = searchText => {
      let newResults = [];
      for (let result of allValues) {
        if (result.value.toLowerCase().startsWith(searchText.toLowerCase())) {
          newResults.push(result);
        }
      }
      setResults(newResults);
      setSearch(searchText);
    }
  
    function handleSelection(item) {
        if (values.map(value => value.id).includes(item.id)) {
          removeValue(item);
        } else {
          addValue(item);
        }
    }


    return (
      <View style={styles.container}>
          <Back/>
          <Pressable style={styles.rightCornerButton} onPress={()=> navigation.navigate(route.params.nextPage)}>
              <Text style={styles.cornerText}>save</Text>
          </Pressable>
          <Text style={styles.mediumText}>What is most important to you?</Text>
          <Text style={styles.smallText}>This information will be used to tailor information CoCo gives you to what you care about!</Text>
          <View style={styles.searchContainer}>
              <Icon name="search-outline" size={35} style={{color: COLORS.darkGreen, marginLeft: 10}}/>
              <TextInput
                style={styles.searchInput}
                onChangeText={handleSearch}
                value={search}
                selectionColor={COLORS.darkGreen}
              ></TextInput>
          </View>
          {
            results.length === 0 ?
            <Text style={styles.noResultsText}>No results :(</Text>
            :
            <ScrollView style={{width: '100%'}}>
              <View style={styles.valuesContainer}>
              {
                results.map(item => {
                  return (
                    <Pressable key={item.id} onPress={() => handleSelection(item)} style={{...styles.button, backgroundColor: values.map(object => object.id).includes(item.id) ? COLORS.darkGreen : COLORS.lightGreen}}>
                      <Text style={{...styles.value, color: values.map(object => object.id).includes(item.id) ? COLORS.lightGreen : COLORS.darkGreen}}>{item.value}</Text>
                    </Pressable>
                  )
                })
              }
              </View>
            </ScrollView>
          }
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
    marginBottom: 10,
    marginTop: 115,
    textAlign: 'center',
  },
  smallText: {
    color: COLORS.darkGreen,
    fontFamily: 'Comfortaa_400Regular',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
  },
  button: {
    padding: 15,
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
  searchContainer: {
    borderWidth: 1,
    width: '70%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.darkGreen,
    marginBottom: 20,
    paddingRight: 50
  },
  searchInput: {
    flexGrow: 1,
    height: '100%',
    fontSize: 25,
    fontFamily: MAINFONT,
    marginLeft: 5,
    color: COLORS.darkGreen,
    maxWidth: '100%',
  },
  noResultsText: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen
  },
  valuesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center'
  }
});
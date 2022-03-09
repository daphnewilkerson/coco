import { StyleSheet, Text, View, Pressable, Image, ScrollView, TextInput, FlatList, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import { MAINFONT, COLORS, Back, UserContext, dogimages } from '../../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';


export default function Search1({ navigation }) {

  const { dogNum } = useContext(UserContext);

  const allResults = [
    {store: 'Tate\'s Cookies'}, 
  ];

  const allResultsB = [
    {store: 'Trader Joe\'s'}, 
  ];

  const [results, setResults] = useState(allResults);
  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [resultsB, setResultsB] = useState(allResultsB);
  const [searchB, setSearchB] = useState('');
  const [searchFocusedB, setSearchFocusedB] = useState(false);
  const [showResultsB, setShowResultsB] = useState(false);

  const handleSearchB = searchText => {
    let newResults = [];
    for (let result of allResultsB) {
      if (result.store.toLowerCase().startsWith(searchText.toLowerCase())) {
        newResults.push(result);
      }
    }
    if (newResults.length === 0) {
      newResults.push({store: 'No results :('})
    }
    setResultsB(newResults);
    setSearchB(searchText);
  }

  const handleSearch = searchText => {
    let newResults = [];
    for (let result of allResults) {
      if (result.store.toLowerCase().startsWith(searchText.toLowerCase())) {
        newResults.push(result);
      }
    }
    if (newResults.length === 0) {
      newResults.push({store: 'No results :('})
    }
    setResults(newResults);
    setSearch(searchText);
  }

  

  const renderResults = ({ item }) => {
    if (item.store === 'No results :(') {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No results :(
          </Text>
        </View>
      )
    }
    return (
      <Pressable onPress={() => {setSearch(item.store); setShowResults(false); Keyboard.dismiss(); }}>
        <View style={{...styles.resultItem, borderBottomWidth: (item.store === results[results.length-1].store ) ? 1 : 0}}>
          <Text style={styles.resultItemText}>
            {item.store}
          </Text>
        </View>
      </Pressable>
    )
  }

  const renderResultsB = ({ item }) => {
    if (item.store === 'No results :(') {
      return (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No results :(
          </Text>
        </View>
      )
    }
    return (
      <Pressable onPress={() => {setSearchB(item.store); setShowResultsB(false); Keyboard.dismiss(); }}>
        <View style={{...styles.resultItem, borderBottomWidth: (item.store === resultsB[resultsB.length-1].store ) ? 1 : 0}}>
          <Text style={styles.resultItemText}>
            {item.store}
          </Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <Back/>
      <Text style={styles.pageTitle}>Search Brands</Text>
      {
        searchFocusedB ?
        <View style={{height: 30}}></View>
        :
        <>
          <Text style={styles.brand}>Brand A</Text>
          <View style={styles.searchContainer}>
            <Icon name="search-outline" size={35} style={{color: COLORS.darkGreen, marginLeft: 10}}/>
            <TextInput
              style={styles.searchInput}
              onChangeText={handleSearch}
              value={search}
              selectionColor={COLORS.darkGreen}
              onFocus={() => {setSearchFocused(true); setShowResults(true)}}
              onBlur={() => {setSearchFocused(false); if (search === '') {setShowResults(false)}}}
            ></TextInput>
          </View>
          <FlatList 
            data={results}
            renderItem={renderResults}
            keyExtractor={entry => entry.store}
            style={{...styles.resultsList, display: (showResults) ? 'flex' : 'none'}}
            keyboardShouldPersistTaps='handled'
          />
        </>
      }
      <Text style={{...styles.brand, marginTop: 0}}>Brand B</Text>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={35} style={{color: COLORS.darkGreen, marginLeft: 10}}/>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearchB}
          value={searchB}
          selectionColor={COLORS.darkGreen}
          onFocus={() => {setSearchFocusedB(true); setShowResultsB(true)}}
          onBlur={() => {setSearchFocusedB(false); if (searchB === '') {setShowResultsB(false)}}}
        ></TextInput>
      </View>
      <FlatList 
        data={resultsB}
        renderItem={renderResultsB}
        keyExtractor={entry => entry.store}
        style={{...styles.resultsListB, display: (showResultsB) ? 'flex' : 'none', top: searchFocusedB ? 320 : 500}}
        keyboardShouldPersistTaps='handled'
      />
      <Image
        style={styles.dog}
        source={dogimages[dogNum]}
      />
      {
        search !== '' && searchB !== '' ?
        <Pressable style={styles.button} onPress={() => navigation.navigate('Scan3')}>
          <Text style={styles.buttonText}>Compare!</Text>
        </Pressable>
        :
        <></>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  pageTitle: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    marginTop: 100,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
  brand: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    marginTop: 50,
    marginRight: 'auto',
    marginLeft: 30,
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
    marginTop: 20,
    marginBottom: 50,
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
  resultItem: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: COLORS.darkGreen,
  },
  resultItemText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    marginLeft: 40
  },
  resultsList: {
    width: '100%',
    height: '80%',
    top: 320,
    backgroundColor: COLORS.background,
    position: 'absolute',
    zIndex: 2, // for ios
    elevation: 2, // for android
  },
  resultsListB: {
    width: '100%',
    height: '80%',
    top: 500,
    backgroundColor: COLORS.background,
    position: 'absolute',
    zIndex: 2, // for ios
    elevation: 2, // for android
  },
  noResultsContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  noResultsText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
  },
  dog: {
    height: '35%',
    width: 300,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '-21%',
    right: '30%'
  }
})
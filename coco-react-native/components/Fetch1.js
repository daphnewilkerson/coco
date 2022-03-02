import React, {
  useState,
} from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, Pressable} from 'react-native';
import { COLORS, MAINFONT } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Fetch1() {

  const navigation = useNavigation();

  const allResults = [
    {store: 'Amazon'}, 
    {store: 'Amtrak'}, 
    {store: 'American Eagle'}
  ];

  const [results, setResults] = useState(allResults);

  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  let recents = ['Bounty', 'Shake Shack', 'Walgreens', 'Sam\'s Club'];
  let recommended = ['Walmart', 'Target', 'CVS', 'TJ Max', 'Trader Joe\'s'];

  const handleSearch = searchText => {
    let newResults = [];
    for (let result of allResults) {
      if (result.store.toLowerCase().startsWith(searchText.toLowerCase())) {
        newResults.push(result);
      }
    }
    console.log(newResults);
    setResults(newResults);
    setSearch(searchText);
  }

  const renderResults = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Fetch2', { store: item.store })}>
      <View style={{...styles.resultItem, borderBottomWidth: (item.store === results[results.length-1].store) ? 1 : 0}}>
        <Text style={styles.resultItemText}>
          {item.store}
        </Text>
      </View>
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Text style={{...styles.label, marginTop: 150}}>
        Search a brand
      </Text>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={35} style={{color: COLORS.darkGreen, marginLeft: 10}}/>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={search}
          selectionColor={COLORS.darkGreen}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        ></TextInput>
      </View>
      <FlatList 
        data={results}
        renderItem={renderResults}
        keyExtractor={entry => entry.store}
        style={{...styles.resultsList, display: (searchFocused || search !== '') ? 'flex' : 'none'}}
      />
      <Text style={styles.label}>
        Recently Bought
      </Text>
      <View style={{...styles.blob, marginBottom: 40}}>
        {recents.map(store => (
          <View style={styles.blobEntry} key={store}>
            <Text style={styles.blobText}>{store}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.label}>
        Recommended
      </Text>
      <View style={styles.blob}>
        {recommended.map(store => (
          <View style={styles.blobEntry} key={store}>
            <Text style={styles.blobText}>{store}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 125,
    height: 105,
    top: 100,
    position: 'absolute'
  },
  label: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen
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
    marginBottom: 30,
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
  blob: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  blobEntry: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
  },
  blobText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25
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
    height: '55%',
    top: '45%',
    backgroundColor: COLORS.background,
    position: 'absolute',
    zIndex: 2, // for ios
    elevation: 2, // for android
  }
});
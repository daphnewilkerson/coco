import React, {
  useState
} from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { COLORS, MAINFONT } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Fetch1() {

  const [search, setSearch] = useState('');

  let recents = ['Bounty', 'Shake Shack', 'Walgreens', 'Sam\'s Club'];
  let recommended = ['Walmart', 'Target', 'CVS', 'TJ Max', 'Trader Joe\'s']

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
        <Icon name="search-outline" size='35' style={{color: COLORS.darkGreen, marginLeft: 10}}/>
        <TextInput
          style={styles.searchInput}
          onChangeText={() => {}}
          value={search}
          selectionColor={COLORS.darkGreen}
          onChange={(e) => setSearch(e.target.value)}
        ></TextInput>
      </View>
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
  }
});
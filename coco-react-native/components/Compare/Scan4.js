import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import { MAINFONT, BOLDFONT, COLORS, Back, UserContext, dogimages, allValues, tjRankings, tateRankings, FONT_SCALE} from '../../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Scan4({ navigation }) {
  const { values, dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Back/>
      <View style={styles.header}>
        <Text style={styles.label} onPress={() => navigation.navigate('Fetch2', {store: 'Tate\'s'})}>Tate's</Text>
        <Text style={styles.label}>Your Values</Text>
        <Text style={styles.label} onPress={() => navigation.navigate('Fetch2', {store: 'Trader Joe\'s'})}>TJ's</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {
          values.length === 0 ?
          <Text style={styles.noValues}>
            Select specific values to compare on your profile page!
          </Text>
          :
          <></>
        }
        {
          values.map((entry, index) => (
            <View style={styles.valueEntry} key={index}>
              <Pressable style={styles.pawWithLabel} onPress={() => navigation.navigate('Fetch2', {store: 'Tate\'s'})}>
                <Icon name={'paw'} size={50} style={{color: COLORS.lightGreen}}/>
                <Text style={styles.pawLabel}>{tateRankings[entry.value]}</Text>
              </Pressable>
              <Text style={styles.valueLabel}>{entry.value.substring(0, 28)}</Text>
              <Pressable style={styles.pawWithLabel} onPress={() => navigation.navigate('Fetch2', {store: 'Trader Joe\'s'})}>
                <Icon name={'paw'} size={50} style={{color: COLORS.lightGreen}}/>
                <Text style={styles.pawLabel}>{tjRankings[entry.value]}</Text>
              </Pressable>
            </View>
          ))
        }
      </ScrollView>
      {
          values.length !== 0 ?
          <>
            <Image
              style={styles.thought}
              source={require('../../assets/idchoosetates.png')}
            />
            <Image
              style={styles.dog}
              source={dogimages[dogNum]}
            />
            {/* <Text style={styles.idChoose}>I'd choose Tate's!</Text> */}
          </>
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
  label: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: Math.round(30*FONT_SCALE),
  },
  idChoose: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: Math.round(22*FONT_SCALE),
    position: 'absolute',
    bottom: '20%',
    right: '20%',
    width: '30%',
    textAlign: 'center',
    
  },
  valueLabel: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
  noValues: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginTop: 100,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGreen,
  },
  valueEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGreen,
  },
  pawWithLabel: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pawLabel: {
    color: 'black', 
    fontSize: 16, 
    position: 'absolute',
    bottom: 8,
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
  },
  scroll: {
    minHeight: '47%',
    maxHeight: '47%'
  },
  dog: {
    height: '20%',
    width: 160,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -5,
    left: '5%',
  },
  thought: {
    height: '15%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '15%',
    left: '-20%'
  },
})
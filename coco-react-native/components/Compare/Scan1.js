import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import { MAINFONT, COLORS, Back, UserContext, dogimages } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'

export default function Scan1() {
  const navigation = useNavigation();
  const { aSet, bSet, setASet, setBSet } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Back/>
      <Text style={styles.pageTitle}>Scan Barcodes</Text>
      <Text style={{...styles.label, marginTop: 30}}>Brand A</Text>
      <Pressable style={styles.outline} onPress={aSet ? undefined : () => navigation.navigate('Scan2', {whichOne: 'A'})}>
        {
          aSet ?
          <>
            <Text style={styles.x} onPress={() => setASet(false)}>X</Text>
            <Text style={styles.tap}>Trader Joe's Cookies</Text>
          </>
          :
          <Text style={styles.tap}>Tap to take photo!</Text>
        }
      </Pressable>
      <Text style={{...styles.label, marginTop: 30}}>Brand B</Text>
      <Pressable style={styles.outline} onPress={bSet ? undefined : () => navigation.navigate('Scan2', {whichOne: 'B'})}>
        {
          bSet ?
          <>
            <Text style={styles.x} onPress={() => setBSet(false)}>X</Text>
            <Text style={styles.tap}>Tate's Cookies</Text>
          </>
          :
          <Text style={styles.tap}>Tap to take photo!</Text>
        }
      </Pressable>
      {
        aSet && bSet ?
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
    fontSize: 35,
    marginTop: 100
  },
  label: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    marginLeft: 20,
    marginRight: 'auto',
    marginBottom: 20
  },
  outline: {
    width: '80%',
    height: 200,
    borderColor: COLORS.darkGreen,
    borderWidth: 1.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  tap: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
  x: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  }
})
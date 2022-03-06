import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import { MAINFONT, COLORS, Back, UserContext, dogimages } from '../../utils/constants'


export default function Scan3({navigation}) {

  const { dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Back/>
      <View style={styles.labelContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.brand}>Tate's</Text>
          <Text style={styles.label}> aligns</Text>
        </View>
        <Text style={styles.label}>more with your ethical values!</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Scan4')}>
        <Text style={styles.buttonText}>Learn more</Text>
      </Pressable>
      <Image
        style={styles.thought}
        source={require('../../assets/thoughtbubble2.png')}
      />
      <Image
        style={styles.dog}
        source={dogimages[dogNum]}
      />
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
  dog: {
    height: 260,
    width: 260,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -5,
    right: -10,
  },
  thought: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -40,
  },
  labelContainer: {
    width: '70%',
    height: 200,
    marginTop: 240,
  },
  brand: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT, // Change this to bold
    fontSize: 37,
    textDecorationLine: 'underline'
  },
  label: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 37,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: -55,
    marginRight: 'auto',
    marginLeft: 55,
    zIndex: 2, // for ios
    elevation: 2, // for android
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
})
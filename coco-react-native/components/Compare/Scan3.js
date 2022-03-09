import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, {
  useState,
  useContext,
  useEffect
} from 'react'
import { MAINFONT, COLORS, Back, UserContext, dogimages, FONT_SCALE, BOLDFONT} from '../../utils/constants'


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
      {
        Dimensions.get('window').height === 896 ? // This is bad I'm just only rendering in demo size
        <Image
          style={styles.thought}
          source={require('../../assets/thoughtbubble2.png')}
        />
        :
        <></>
      }
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
    height: '30%',
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
    bottom: '-5%',
  },
  labelContainer: {
    width: '70%',
    height: '24%',
    marginTop: '58%',
  },
  brand: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT, // Change this to bold
    fontSize: Math.round(38*FONT_SCALE),
    textDecorationLine: 'underline'
  },
  label: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: Math.round(38*FONT_SCALE),
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
    fontFamily: BOLDFONT,
    fontSize: 20,
  },
})
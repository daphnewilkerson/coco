import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {
  useContext
} from 'react'
import { MAINFONT, COLORS, Back, UserContext, dogimages, BOLDFONT } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native';

export default function CompareMain() {
  const { dogNum } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Back/>
      <Image
        style={[styles.dog, {
          transform: [{ rotate: '-45deg' }]
        }]}
        source={dogimages[dogNum]}
      />
      <Text style={styles.pageTitle}>Compare Items</Text>
      <Pressable style={{...styles.button, marginTop: 100}} onPress={() => navigation.navigate('Scan1')}>
        <Text style={styles.buttonText}>Scan Barcode</Text>
      </Pressable>
      <Text style={styles.or}>Or</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Search1')}>
        <Text style={styles.buttonText}>Search Brand</Text>
      </Pressable>
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
  button: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 20,
  },
  pageTitle: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 35,
    marginTop: 100
  },
  or: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    margin: 20,
  },
  dog: {
    position: 'absolute',
    resizeMode: 'contain',
    height: '30%',
    width: 300,
    top: '70%',
    right: -115,
  }
  
})
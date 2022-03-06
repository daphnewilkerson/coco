import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import { COLORS, MAINFONT, winkimages, UserContext, Back } from '../../utils/constants';

export default function Sniff3({ navigation }) {
  const { dogNum } = useContext(UserContext);
  const [playConfetti, setPlayConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setPlayConfetti(false), 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Back/>
      <Image
        style={styles.dog}
        source={winkimages[dogNum]}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.label}>Great job! +6</Text>
        <Image
          style={styles.bone}
          source={require('../../assets/bone.png')}
        />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Sniff4')}>
        <Text style={styles.buttonText}>Learn More</Text>
      </Pressable>
      {
        playConfetti ?
        <Image
          style={styles.confetti}
          source={require('../../assets/confetti.gif')}
        />
        :
        <></>
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
  dog: {
    height: 360,
    width: 360,
    bottom: 200,
    resizeMode: 'contain',
    position: 'absolute'
  },
  image: {
    width: 400, 
    height: 400, 
    resizeMode: 'contain'
  },
  imageContainer: {
    width: '100%',
    backgroundColor: 'black',
    borderWidth: 7,
    borderColor: COLORS.lightGreen
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    height: 70,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginTop: 450,
    zIndex: 2, // for ios
    elevation: 2, // for android
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    zIndex: 2, // for ios
    elevation: 2, // for android
  },
  label: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 40,
  },
  bone: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 150
  },
  confetti: {
    position: 'absolute',
    flex: 1
  }
})
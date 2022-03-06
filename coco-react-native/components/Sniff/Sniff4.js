import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native'
import React, {
  useContext,
  useRef
} from 'react'
import { COLORS, MAINFONT, winkimages, UserContext, Back } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Sniff4({ navigation }) {

  const scrollRef = useRef(null);

  return (
    <ScrollView 
      style={styles.scroll} 
      contentContainerStyle={styles.scrollContent} 
      snapToInterval={1000}
      decelerationRate="fast"
      ref={scrollRef}
    >
      <View style={styles.container}>
        <Back/>
        <Text style={styles.label}>Your Trip</Text>
        <Text style={styles.sideLabel}>Store</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonText}>Trader Joe's</Text>
        </Pressable>
        <Text style={styles.sideLabel}>Brands</Text>
        <Pressable style={styles.buttonSmall} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonTextSmall}>Trader Joe's</Text>
        </Pressable>
        <Pressable style={styles.buttonSmall} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonTextSmall}>Skinny Pop</Text>
        </Pressable>
        <Pressable style={styles.buttonSmall} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonTextSmall}>Kerrygold</Text>
        </Pressable>
        <Pressable style={styles.buttonSmall} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonTextSmall}>Stella Rosa</Text>
        </Pressable>
        <Text style={styles.sideLabel}>CoCo Bones Received</Text>
        <View style={styles.boneContainer}>
          <Text style={styles.boneLabel}>+6</Text>
          <Image
            style={styles.bone}
            source={require('../../assets/bone.png')}
          />
          <Pressable style={styles.boneButton}>
            <Text style={styles.buttonTextSmall}>View Bones</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => scrollRef.current.scrollTo({y: 1000, animated: true})}>
          <Icon name="chevron-down" size={45} color={COLORS.darkGreen}/>
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Back/>
        <Pressable onPress={() => scrollRef.current.scrollTo({y: 0, animated: true})} style={{position: 'absolute', top: 40, right: 30}}>
          <Icon name="chevron-up" size={45} color={COLORS.darkGreen}/>
        </Pressable>
        <Text style={styles.label}>Your Trip</Text>
        <Text style={{...styles.sideLabel, marginTop: 100}}>Your Best Purchase</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonText}>Stella Rosa</Text>
        </Pressable>
        <Text style={{...styles.sideLabel, marginTop: 50}}>Next time, instead of</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonText}>Kerrygold</Text>
        </Pressable>
        <Text style={{...styles.sideLabel, marginTop: 50}}>Try...</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Fetch2', { store: 'Trader Joe\'s' })}>
          <Text style={styles.buttonText}>Organic Valley</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  label: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 40,
    marginTop: 100,
  },
  sideLabel: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    height: 70,
    width: '95%',
    justifyContent: 'center',
    borderRadius: 18,
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    marginLeft: 20,
  },
  buttonSmall: {
    backgroundColor: COLORS.lightGreen,
    height: 60,
    width: '95%',
    justifyContent: 'center',
    borderRadius: 18,
    marginBottom: 10,
  },
  buttonTextSmall: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
    marginLeft: 20,
  },
  scroll: {
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
  },
  container2: {
    marginTop: 120,
    alignItems: 'center',
    marginBottom: 140, // This is so janky
  },
  bone: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  boneContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 'auto',
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 10
  },
  boneLabel: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 40,
    textAlign: 'center',
  },
  boneButton: {
    backgroundColor: COLORS.lightGreen,
    height: 70,
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 18,
    marginLeft: 15
  },
})
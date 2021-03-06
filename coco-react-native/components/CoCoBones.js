import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, {
  useContext
} from 'react'
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext, winkimages} from '../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


export default function Purchases({ route, navigation }) {

  const { dogNum, bones } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Back/>
      <Text style={styles.pageTitle}>CoCo Bones</Text>
      <View style={styles.boneview}>
        <Text style={styles.bonetext}> You have </Text>
        <Text style={styles.bonenum}> {bones} </Text>
        <Text style={styles.bonetext}> CoCo Bone{bones === 1 ? '!' : 's!'}</Text>
      </View>
      {
        bones === 0 ?
        <><Text style={styles.noBonesText}>Make ethical purchases to earn CoCo Bones!</Text></>
        
        :
        <></>
      }
      <Image style={styles.dog} source={winkimages[dogNum]} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 100
  },
  dog: {
    height: 250,
    resizeMode: 'contain',
    bottom: -8
  },
  boneview:{
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 15,
  },
  bonetext: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 40,
    padding: 10,
  },
  bonenum: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 60,
    padding: 10,
  },
  pageTitle: {
    color: COLORS.darkGreen,
    fontFamily: BOLDFONT,
    fontSize: 45,
    padding: 10,
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
    height: '95%',
  },
  noBonesText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  }
})
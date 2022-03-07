import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, {
  useContext
} from 'react'
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext } from '../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


export default function Purchases({ route, navigation }) {

  const { purchases } = useContext(
    UserContext
  );

  
  return (
    <View style={styles.container}>
      <Back/>
      <Text style={styles.pageTitle}>Recent Purchases</Text>
      <ScrollView style={styles.listContainer} contentContainerStyle={{ alignItems: 'center' }}>
        {
          purchases.length === 0 ?
          <><Text style={styles.noPurchasesText}>No purchases yet...</Text>
          <Text style={styles.noPurchasesText}>Scan receipt to confirm a purchase!</Text></>
          :
          purchases.map(entry => (
            <View style={styles.purchase} key={entry.date}>
              <View style={{flexDirection: 'column', justifyContent: 'space-around', height: '70%'}}>
                <Text style={styles.purchaseText}>{entry.date.toLocaleDateString("en-US")}</Text>
                <Text style={styles.purchaseText}>{entry.store}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.boneText}>+ {entry.bones}</Text>
                <Image
                  style={styles.bone}
                  source={require('../assets/bone.png')}
                />
              </View>
            </View>
          ))
        }
        
      </ScrollView>
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
  pageTitle: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 45,
    padding: 10,
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
    height: '95%',
  },
  noPurchasesText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    padding: 15,
  },
  purchase: {
    backgroundColor: COLORS.lightGreen,
    width: '90%',
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  purchaseText: {
    fontSize: 20,
    fontFamily: BOLDFONT,
    color: COLORS.darkGreen
  },
  bone: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  boneText: {
    fontSize: 30,
    fontFamily: BOLDFONT,
    color: COLORS.darkGreen
  }
})
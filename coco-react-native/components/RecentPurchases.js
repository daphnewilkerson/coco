import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
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
          <></>
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
  }
})
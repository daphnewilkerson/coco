import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, {
  useContext
} from 'react'
import { COLORS, MAINFONT, winkimages, UserContext, Back } from '../../utils/constants';

export default function Sniff4() {
  return (
    <View style={styles.container}>
      <Back/>
      <Text>Sniff4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
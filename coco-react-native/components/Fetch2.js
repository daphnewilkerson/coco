import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Fetch2({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Fetch2 Page for {route.params.store}!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
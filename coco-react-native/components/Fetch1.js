import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Fetch1() {
  return (
    <View style={styles.container}>
      <Text>
        Fetch first Page!
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
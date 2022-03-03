import React, {
  useContext
} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { UserContext } from '../utils/constants';

export default function Profile() {
  const { bookmarks } = useContext(
    UserContext
  );

  return (
    <View style={styles.container}>
      <Text>
        Profile Page!
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
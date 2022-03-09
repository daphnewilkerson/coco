import React, { 
  useContext
} from 'react';
import { Button, Image, View, StyleSheet, Pressable, Text } from 'react-native';
import { COLORS, MAINFONT, sniffimages, UserContext, Back } from '../../utils/constants';


export default function Sniff2({route, navigation}) {

  const { dogNum } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Back/>
      <Image
        style={styles.dog}
        source={sniffimages[dogNum]}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: route.params.image }} style={styles.image} />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Sniff3')}>
        <Text style={styles.buttonText}>See my score!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dog: {
    height: 230,
    width: 230,
    right: 190,
    bottom: -50,
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
    borderColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    bottom: 50,
    right: 10
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
})
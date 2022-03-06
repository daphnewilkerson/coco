import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React, {
  useContext
} from 'react';
import { COLORS, MAINFONT, dogimages, UserContext, Back } from '../../utils/constants';
import * as ImagePicker from 'expo-image-picker';

export default function Sniff1({ navigation }) {

  const { dogNum } = useContext(UserContext);

  const photoAlert = () =>
    Alert.alert(
      "Upload Photo",
      undefined,
      [
        {
          text: "Photo Gallery",
          onPress: pickImage
        },
        {
          text: "Camera",
          onPress: photoAlert, // There might be a better solution here, also maybe do camera thing for phone
        },
        { text: "Cancel", onPress: undefined, style: "cancel" }
      ]
    );
  
  // Code straight from expo :D
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      navigation.navigate('Sniff2', {image: result.uri})
    }
  };

  return (
    <View style={styles.container}>
      <Back/>
      <Text style={styles.label}>Scan your receipt to see how well you shopped!</Text>
      <Image
        style={styles.dog}
        source={dogimages[dogNum]}
      />
      <Image
        style={styles.speech}
        source={require('../../assets/speech.png')}
      />
      <Pressable style={styles.button} onPress={photoAlert}>
        <Text style={styles.buttonText}>
          Upload Photo
        </Text>
      </Pressable>
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
  dog: {
    height: 230,
    width: 230,
    right: 190,
    resizeMode: 'contain',
    position: 'absolute'
  },
  speech: {
    height: 200,
    width: 200,
    top: 180,
    left: 200,
    resizeMode: 'contain',
    position: 'absolute'
  },
  label: {
    // This definitely feels bad... maybe redo this
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
    position: 'absolute',
    width: 170,
    top: 225,
    left: 210,
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLORS.lightGreen,
    width: '70%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 500
  },
  buttonText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
})
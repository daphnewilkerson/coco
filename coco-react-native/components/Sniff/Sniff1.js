import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React, {
  useContext,
  useEffect,
  useState,
  useRef
} from 'react';
import { COLORS, MAINFONT, dogimages, UserContext, Back, BOLDFONT } from '../../utils/constants';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as Device from 'expo-device';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Sniff1({ navigation }) {

  const { dogNum } = useContext(UserContext);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [showCamera, setShowCamera] = useState(false);

  const camRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

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
          onPress: Device.isDevice ? () => setShowCamera(true) : photoAlert, // There might be a better solution here, also maybe do camera thing for phone
        },
        { text: "Cancel", onPress: undefined, style: "cancel" }
      ]
    );
  
  const takePicture = async () => {
    let photo = await camRef.current?.takePictureAsync();
    navigation.navigate('Sniff2', {image: photo.uri})
  }
  
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
      {
        showCamera ?
        <></>
        :
        <Back/>
      }
      <Text numberOfLines={4} adjustsFontSizeToFit style={styles.label}>Scan your receipt to see how well you shopped!</Text>
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
      {
        showCamera ?
        <View style={styles.camContainer}>
          <View style={styles.topBar}/>
          <Camera style={styles.camera} type={type} ref={camRef}/>
          <View style={styles.otherBottomBar}>
            <Text style={styles.cancelButton} onPress={() => setShowCamera(false)}>Cancel</Text>
            <Pressable style={styles.cameraButtonOuter} onPress={takePicture}>
              <View style={styles.cameraButtonInner}/>
            </Pressable>
            <Icon 
              name="camera-reverse-outline" 
              color="white" 
              size={35}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
          </View>
        </View>
        :
        <></>
      }
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
    height: '30%',
    width: '45%',
    right: '50%',
    resizeMode: 'contain',
    position: 'absolute'
  },
  speech: {
    height: 200,
    width: '45%',
    top: 180,
    left: '50%',
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
    left: '51%',
    textAlign: 'center',
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
    fontFamily: BOLDFONT,
    fontSize: 20,
  },
  camera: {
    flex: 1,
  },
  camText: {
    fontSize: 18,
    color: 'white',
  },
  camContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  otherBottomBar: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  topBar: {
    flex: 0.2,
    backgroundColor: 'black',
    width: '100%'
  },
  cameraButtonOuter: {
    backgroundColor: 'white',
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButtonInner: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  cancelButton: {
    color: 'white',
  },
})
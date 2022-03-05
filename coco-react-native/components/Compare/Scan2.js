import { StyleSheet, Text, View, Button, Pressable, Alert, Image } from 'react-native'
import React, {
  useState,
  useEffect, 
  useContext
} from 'react'
import { MAINFONT, COLORS, UserContext } from '../../utils/constants'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Device from 'expo-device';

export default function Scan2({route, navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { setASet, setBSet } = useContext(UserContext)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    createAlert(type, data);
  };

  const createAlert = (type, data) =>
    Alert.alert(
      "Bar Code Detected",
      `A bar code has been scanned! Would you like to re-scan or continue?`,
      [
        {
          text: "Retry",
          onPress: () => setScanned(false),
        },
        { text: "Continue", onPress: goBack }
      ]
    );
  
  const goBack = () => {
    if (route.params.whichOne === 'A') {
      setASet(true);
    }
    else {
      setBSet(true);
    }
    navigation.goBack();
  }

  if (hasPermission === null) {
    return (
    <View style={styles.otherContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
    );
  }

  // If on computer or reject permission, show the demo
  if (hasPermission === false || !Device.isDevice) {
    return (
      <View style={styles.otherContainer}>
        <View style={styles.topBar}/>
        <Image
          style={styles.image}
          source={route.params.whichOne === 'A' ? require('../../assets/barcode1.png') : require('../../assets/barcode2.png')}
        />
        <View style={styles.otherBottomBar}>
          <Text style={styles.cancelButton} onPress={() => navigation.goBack()}>Cancel</Text>
          <Pressable style={styles.cameraButtonOuter} onPress={() => createAlert('', '')}>
            <View style={styles.cameraButtonInner}/>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      <View style={styles.bottomBar}>
        <Text style={styles.cancelButton} onPress={() => navigation.goBack()}>Cancel</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    display: 'flex',
    flex: 1,
  },
  scanner: { 
    backgroundColor: 'red',
    flex: 5
  },
  bottomBar: {
    flex: 0.75,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  cancelButton: {
    color: 'white',
    marginLeft: 20
  },
  otherContainer: {
    backgroundColor: COLORS.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 20,
  },
  image: {
    resizeMode: 'contain',
    flex: 3,
  },
  otherBottomBar: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%'
  },
  topBar: {
    flex: 0.5,
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
    marginLeft: 105
  },
  cameraButtonInner: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  }
})
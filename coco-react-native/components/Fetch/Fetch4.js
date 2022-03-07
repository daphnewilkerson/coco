import { View, Text, ActivityIndicator, StyleSheet, Pressable} from 'react-native'
import React, {
  useState
} from 'react'
import { WebView } from 'react-native-webview';
import { Back, COLORS } from '../../utils/constants'; 

export default function Fetch4({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
        {
          loading ?
          <View style={styles.cover}>
            <Back/>
            <ActivityIndicator size='large' color={COLORS.darkGreen}/>
          </View>
          :
          <View style={{width: 100, height: 100}}>
            {/* This is wacky as hell, but for some reason the button isn't pressable otherwise */}
            <Back/>
          </View>
        }
        <WebView source={{ uri: route.params.link }} onLoad={() => setLoading(false)} style={styles.webpage} originWhitelist={['*']} />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: COLORS.background
  },
  cover: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: COLORS.background,
  },
  webpage: {
    marginTop: 0
  }
})
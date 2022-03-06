import { useNavigation } from '@react-navigation/native';
import React, {
  useContext
} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext, storeLogos, storeSpecificNews, storeRatings } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Graph1, Graph2, Graph3 } from './Graphs';
import NewsBlurb from './NewsBlurb';



export default function Fetch3({ route, navigation }) {

  const graphs = {
    'Amazon': {
      'Sustainability': <Graph1/>,
      'Accessibility': <Graph2/>,
      'Workers\' Rights': <Graph3/>
    }
  }


  return (
    <View style={styles.container}>
      <Back/>
      <Image
        style={styles.storeLogo}
        source={storeLogos[route.params.store]}
      />
      <Text style={styles.scoreLabel}>
        {route.params.category}: {storeRatings[route.params.store][route.params.category]}
      </Text>
      <Text style={styles.storiesLabel}>
        Stories
      </Text>
      {
        storeSpecificNews[route.params.store][route.params.category].map(story => (
          <NewsBlurb key={story.title} story={story}/>
        ))
      }
      <Text style={styles.statsLabel}>
        Stats
      </Text>
      <View style={styles.graphStyle}>
        {
          graphs[route.params.store][route.params.category]
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  storeLogo: {
    height: 100,
    position: 'absolute',
    top: 100,
    resizeMode: 'contain',
  },
  scoreLabel: {
    fontFamily: MAINFONT,
    fontSize: 35,
    color: COLORS.darkGreen,
    marginTop: 220,
  },
  storiesLabel: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    marginRight: 'auto',
    left: 20,
    marginBottom: 10,
    marginTop: 30
  },
  statsLabel: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    marginRight: 'auto',
    marginTop: 10,
    left: 20,
  },
  graphStyle: {
    marginTop: 30,
  }
});
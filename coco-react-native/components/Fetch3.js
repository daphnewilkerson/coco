import { useNavigation } from '@react-navigation/native';
import React, {
  useContext
} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, Back } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Graph1, Graph2, Graph3 } from './Graphs';
import { UserContext, storeLogos, storeSpecificNews, storeRatings } from '../utils/constants';



export default function Fetch3({ route, navigation }) {

  const { bookmarks, addBookmark, removeBookmark } = useContext(
    UserContext
  );

  const graphs = {
    'Amazon': {
      'Sustainability': <Graph1/>,
      'Accessibility': <Graph2/>,
      'Workers\' Rights': <Graph3/>
    }
  }

  const handleBookmark = (story) => {
    if (bookmarks.includes(story)) {
      removeBookmark(story);
    }
    else {
      addBookmark(story);
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
          <Pressable key={story.title} style={styles.newsBlurb} onPress={() => navigation.navigate('Fetch4', {link: story.link})}>
            <Text style={styles.source}>{story.source}</Text>
            <Text style={styles.title}>{story.title}</Text>
            <Pressable style={styles.bookmarkContainer} onPress={() => handleBookmark(JSON.stringify(story))}>
                  {
                    bookmarks.includes(story.title) ?
                    <Icon name="bookmark" size={25} style={styles.bookmark}/>
                    :
                    <Icon name="bookmark-outline" size={25} style={styles.bookmark}/>
                  }
                </Pressable>
          </Pressable>
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
  newsBlurb: {
    width: '95%',
    backgroundColor: COLORS.lightGreen,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    position: 'relative'
  },
  source: {
    fontFamily: MAINFONT,
    fontSize: 16,
    color: COLORS.darkGreen,
    top: 10,
    left: 10
  },
  title: {
    fontFamily: MAINFONT,
    fontSize: 18,
    color: COLORS.darkGreen,
    marginTop: 25,
    left: 10,
    marginRight: 50
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bookmark: {
    color: COLORS.darkGreen
  },
  graphStyle: {
    marginTop: 30,
  }
});
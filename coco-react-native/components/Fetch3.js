import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, Back } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Graph1, Graph2, Graph3 } from './Graphs';


export default function Fetch3({ route, navigation }) {
  
  const storeLogos = {
    Amazon: require('../assets/company-logos/amazon.png')
  }

  const storeNews = {
    Amazon: {
      'Sustainability': [
        {
          source: 'WSJ',
          title: 'Amazon relocates headquarters to space',
          link: ''
        },
        {
          source: 'Washington Post',
          title: 'Amazon Factory Starts Forest Fire, Bezos: “My Bad”',
          link: ''
        }
      ],
      'Accessibility': [
        {
          source: 'CNN',
          title: 'Major Amazon Lawsuit Underway',
          link: ''
        },
        {
          source: 'WSJ',
          title: 'Bezos says “Exclusivity is Good”',
          link: ''
        }
      ],
      'Workers\' Rights': [
        {
          source: 'NYT',
          title: 'Amazon Employees Fired When They Have Covid',
          link: ''
        },
        {
          source: 'WSJ',
          title: 'Retention Rate At Amazon at an “All Time Low”',
          link: ''
        }
      ],
    }
  }

  const storeRatings = {
    Amazon: {
      'Sustainability': 5,
      'Accessibility': 7,
      'Workers\' Rights': 2
    }
  }

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
        storeNews[route.params.store][route.params.category].map(story => (
          <Pressable key={story.title} style={styles.newsBlurb}>
            <Text style={styles.source}>{story.source}</Text>
            <Text style={styles.title}>{story.title}</Text>
            <Icon name="bookmark-outline" style={styles.bookmark} size={25}/>
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
    width: 200,
    height: 100,
    position: 'absolute',
    top: 100,
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
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: COLORS.darkGreen
  },
  graphStyle: {
    marginTop: 30,
  }
});
import { useNavigation } from '@react-navigation/native';
import React, {
  useContext
} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT, Back } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path, G, Defs } from "react-native-svg";
import SadDog from './dogs/dogSad';
import { UserContext } from '../utils/constants';


export default function Fetch2({ route, navigation }) {

  const { bookmarks, addBookmark, removeBookmark } = useContext(
    UserContext
  );
  
  const storeLogos = {
    'Amazon': require('../assets/company-logos/amazon.png'),
    'Amtrak': require('../assets/company-logos/amtrak.png'),
    'American Eagle': require('../assets/company-logos/americaneagle.png')
  }

  const storeNews = {
    Amazon: [
      {
        source: 'NYT',
        title: 'Amazon Rebrands Itself as \'Zamazon\' Following CS 147 Video',
        link: 'https://www.nytimes.com/'
      },
      {
        source: 'CNN',
        title: 'Amazon Better Than Home Depot, Despite What Dog In Video Says',
        link: 'https://www.cnn.com/'
      }
    ],
    'Amtrak': [],
    'American Eagle': []
  }

  const storeRatings = {
    Amazon: [
      {
        category: 'Sustainability',
        score: 5
      },
      {
        category: 'Accessibility',
        score: 7
      },
      {
        category: 'Workers\' Rights',
        score: 2
      }
    ],
    'Amtrak': [],
    'American Eagle': []
  }

  const handleBookmark = (title) => {
    if (bookmarks.includes(title)) {
      removeBookmark(title);
    }
    else {
      addBookmark(title);
    }
  }

  return (
    <View style={styles.container}>
      <Back/>
      {/* <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      /> */}
      <Image
        style={styles.storeLogo}
        source={storeLogos[route.params.store]}
      />
      {
        storeRatings[route.params.store].length === 0 ?
        <View style={styles.container}>
          <Text style={styles.sorryText}>
            Sorry, we don't have any info uploaded for this company yet. I would go check out Amazon...
          </Text>
          <SadDog style={{marginTop: 'auto', marginBottom: -37}}/>
        </View>
        :
        <>
          <Text style={styles.label}>
            Recent News
          </Text>
          {
            storeNews[route.params.store].map(story => (
              <Pressable key={story.title} style={styles.newsBlurb} onPress={() => navigation.navigate('Fetch4', {link: story.link})}>
                <Text style={styles.source}>{story.source}</Text>
                <Text style={styles.title}>{story.title}</Text>
                <Pressable style={styles.bookmarkContainer} onPress={() => handleBookmark(story.title)}>
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
          <Text style={styles.ratingsLabel}>
            CoCo's Ratings
          </Text>
          <View style={styles.ratingsContainer}>
          {
            storeRatings[route.params.store].map(rating => (
              <Pressable key={rating.category} style={styles.ratingsEntry} onPress={() => navigation.navigate('Fetch3', {store: route.params.store, category: rating.category})}>
                <Text style={styles.ratingsNumber}>{rating.score}</Text>
                <Bone style={{marginTop: -10}}/>
                <Text style={styles.ratingsText}>{rating.category}</Text>
              </Pressable>
            ))
          }
          </View>
        </>
      }
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
  logo: {
    width: 125,
    height: 105,
    top: 100,
    position: 'absolute'
  },
  storeLogo: {
    width: 200,
    height: 100,
    marginTop: 100,
    marginBottom: 50,
  },
  label: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    right: 100,
    marginBottom: 10,
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
  ratingsLabel: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    marginTop: 40
  },
  ratingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 100,
  },
  ratingsEntry: {
    width: '25%',
    backgroundColor: COLORS.lightGreen,
    height: 150,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  ratingsNumber: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 25,
  },
  ratingsText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 14,
    textAlign: 'center'
  },
  sorryText: {
    fontFamily: MAINFONT,
    fontSize: 25,
    color: COLORS.darkGreen,
    margin: 20,
    marginTop: 100
  },
});

const Bone = (props) => (
  <Svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="m12.505 40.027.4-.368-.4-.368a7.536 7.536 0 0 1-2.45-5.49 7.307 7.307 0 0 1 7.398-7.38 7.524 7.524 0 0 1 7.08 5.064l.115.332.353.003 30.077.223.362.002.116-.343c.995-2.961 3.732-4.975 6.986-4.95 4.123.03 7.488 3.372 7.518 7.49v.002a7.283 7.283 0 0 1-2.359 5.456l-.4.368.4.368a7.53 7.53 0 0 1 2.45 5.498 7.3 7.3 0 0 1-7.392 7.376 7.524 7.524 0 0 1-7.08-5.064l-.116-.332-.353-.003-30.082-.218-.362-.003-.115.344c-.995 2.96-3.736 4.97-6.991 4.946-4.123-.03-7.488-3.373-7.518-7.491l-.5.003.5-.003a7.305 7.305 0 0 1 2.363-5.462Z"
        fill="#07500A"
        stroke="#07500A"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
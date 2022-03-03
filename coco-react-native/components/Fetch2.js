import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { COLORS, MAINFONT } from '../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path, G, Defs } from "react-native-svg"


export default function Fetch2({ route, navigation }) {
  
  const storeLogos = {
    Amazon: require('../assets/company-logos/amazon.png')
  }

  const storeNews = {
    Amazon: [
      {
        source: 'NYT',
        title: 'Amazon Rebrands Itself as \'Zamazon\' Following CS 147 Video',
        link: ''
      },
      {
        source: 'CNN',
        title: 'Amazon Better Than Home Depot, Despite What Dog In Video Says',
        link: ''
      }
    ]
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
    ]
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Image
        style={styles.storeLogo}
        source={storeLogos[route.params.store]}
      />
      <Text style={styles.label}>
        Recent News
      </Text>
      {
        storeNews[route.params.store].map(story => (
          <Pressable style={styles.newsBlurb}>
            <Text style={styles.source}>{story.source}</Text>
            <Text style={styles.title}>{story.title}</Text>
            <Icon name="bookmark-outline" style={styles.bookmark} size={25}/>
          </Pressable>
        ))
      }
      <Text style={styles.ratingsLabel}>
        CoCo's Ratings
      </Text>
      <View style={styles.ratingsContainer}>
      {
        storeRatings[route.params.store].map(rating => (
          <Pressable style={styles.ratingsEntry}>
            <Text style={styles.ratingsNumber}>{rating.score}</Text>
            <Bone style={{marginTop: -10}}/>
            <Text style={styles.ratingsText}>{rating.category}</Text>
          </Pressable>
        ))
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
    justifyContent: 'center',
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
    position: 'absolute',
    top: 225,
  },
  label: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    right: 100,
    marginTop: 400,
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
  ratingsLabel: {
    fontFamily: MAINFONT,
    fontSize: 28,
    color: COLORS.darkGreen,
    marginTop: 20
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
  }
});

// const ThoughtBubble = (props) => (
//   <Svg
//     // width={375}
//     // height={254}
//     viewBox="0 0 450 350"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <Path
//       d="M285.5 237.5c0 2.161-1.964 4-4.5 4s-4.5-1.839-4.5-4 1.964-4 4.5-4 4.5 1.839 4.5 4ZM262.5 247c0 3.558-3.101 6.5-7 6.5s-7-2.942-7-6.5 3.101-6.5 7-6.5 7 2.942 7 6.5ZM240.5 239c0 4.669-4.004 8.5-9 8.5s-9-3.831-9-8.5c0-4.669 4.004-8.5 9-8.5s9 3.831 9 8.5ZM-1 35.145C24-9.933 75.642 13.207 82 23.764 82 23.764 97.5 1 125.5 1S173 23.764 173 23.764 177.676 1 213.338 1s50.406 22.763 50.406 22.763S284.563 1 319.5 1 375 35.145 375 35.145M375 191c-25 45.078-76.643 21.938-83 11.381 0 0-15.5 22.764-43.5 22.764S201 202.381 201 202.381s-4.676 22.763-40.338 22.763-50.406-22.763-50.406-22.763-20.819 22.764-55.756 22.764S-1 191-1 191"
//       stroke="#07500A"
//     />
//   </Svg>
// )

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
import { Text, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {
  createContext
} from 'react';


export const COLORS = {
  background: '#FEFADC',
  lightGreen: '#93d075',
  darkGreen: '#07500A',
}

export const MAINFONT = 'Comfortaa_400Regular';



const globalStyles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30
  },
  backButtonText: {
    fontFamily: MAINFONT,
    fontSize: 20,
    color: COLORS.darkGreen
  }
})

export const Back = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={globalStyles.backButton}>
      <Text style={globalStyles.backButtonText}>
        {'<'} back
      </Text>
    </Pressable>
  );
};

// Using context for global stuff, hopefully this works
export const UserContext = createContext(null);


export const storeLogos = {
  'Amazon': require('../assets/company-logos/amazon.png'),
  'Amtrak': require('../assets/company-logos/amtrak.png'),
  'American Eagle': require('../assets/company-logos/americaneagle.png')
}

export const storeNews = {
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

// export const storeRatings = {
//   Amazon: [
//     {
//       category: 'Sustainability',
//       score: 5
//     },
//     {
//       category: 'Accessibility',
//       score: 7
//     },
//     {
//       category: 'Workers\' Rights',
//       score: 2
//     }
//   ],
//   'Amtrak': [],
//   'American Eagle': []
// }

export const storeRatings = {
  Amazon: {
    'Sustainability': 5,
    'Accessibility': 7,
    'Workers\' Rights': 2
  },
  'Amtrak': {},
  'American Eagle': {}
}


export const storeSpecificNews = {
  Amazon: {
    'Sustainability': [
      {
        source: 'WSJ',
        title: 'Amazon relocates headquarters to space',
        link: 'https://www.wsj.com/'
      },
      {
        source: 'Washington Post',
        title: 'Amazon Factory Starts Forest Fire, Bezos: “My Bad”',
        link: 'https://www.washingtonpost.com/'
      }
    ],
    'Accessibility': [
      {
        source: 'CNN',
        title: 'Major Amazon Lawsuit Underway',
        link: 'https://www.cnn.com/'
      },
      {
        source: 'WSJ',
        title: 'Bezos says “Exclusivity is Good”',
        link: 'https://www.wsj.com/'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'NYT',
        title: 'Amazon Employees Fired When They Have Covid',
        link: 'https://www.nytimes.com/'
      },
      {
        source: 'WSJ',
        title: 'Retention Rate At Amazon at an “All Time Low”',
        link: 'https://www.wsj.com/'
      }
    ],
  }
}
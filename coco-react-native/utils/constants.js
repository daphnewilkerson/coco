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


export const Back = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>
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
      title: 'New Amazon Headquarters Sparks Feud Among Indigenous South Africans',
      link: 'https://www.nytimes.com/2022/02/26/world/africa/south-africa-amazon.html'
    },
    {
      source: 'NBC',
      title: 'Amazon is developing high-tech surveillance tools for an eager customer: America\'s police',
      link: 'https://www.nbcnews.com/tech/security/amazon-developing-high-tech-surveillance-tools-eager-customer-america-s-n1038426'
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
        source: 'CNN',
        title: 'Amazon just made it much easier to buy planet-friendly products',
        link: 'https://www.cnn.com/2020/09/23/business/amazon-climate-friendly-products/index.html'
      },
      {
        source: 'GeekWire',
        title: 'Amazon sustainability report: Carbon emissions rose 19% in 2020 as pandemic drove huge revenue',
        link: 'https://www.geekwire.com/2021/amazon-sustainability-report-carbon-emissions-rose-19-2020-pandemic-drove-record-revenue/'
      }
    ],
    'Accessibility': [
      {
        source: 'CNET',
        title: 'Amazon\'s Alexa calls attention to Global Accessibility Awareness Day all month long',
        link: 'https://www.cnet.com/home/smart-home/amazons-alexa-calls-attention-to-global-accessibility-awareness-day-all-month-long/'
      },
      {
        source: 'Tech Crunch',
        title: 'Apple and Amazon ML/AI leads to speak on accessibility at Sight Tech Global 2021',
        link: 'https://techcrunch.com/2021/11/05/apple-and-amazon-ml-ai-leads-to-speak-on-accessibility-at-sight-tech-global-2021/'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'The Guardian',
        title: '‘I\'m not a robot’: Amazon workers condemn unsafe, grueling conditions at warehouse',
        link: 'https://www.theguardian.com/technology/2020/feb/05/amazon-workers-protest-unsafe-grueling-conditions-warehouse'
      },
      {
        source: 'NPR',
        title: 'Amazon unionization efforts get a boost under a settlement with U.S. labor board',
        link: 'https://www.npr.org/2021/12/23/1067698799/amazon-nlrb-union#:~:text=Press-,Amazon%20settles%20with%20NLRB%20to%20give%20workers%20the%20power%20to,freely%20organize%20%E2%80%94%20and%20without%20retaliation'
      }
    ],
  }
}

const styles = StyleSheet.create({
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
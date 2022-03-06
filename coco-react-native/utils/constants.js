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

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 2, 
    elevation: 2
  },
  backButtonText: {
    fontFamily: MAINFONT,
    fontSize: 20,
    color: COLORS.darkGreen
  }
})


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

export const dogimages = [require('../assets/dogs/dog1.png'), require('../assets/dogs/dog2.png'), require('../assets/dogs/dog3.png'), require('../assets/dogs/dog4.png'), require('../assets/dogs/dog5.png'), require('../assets/dogs/dog6.png'), require('../assets/dogs/dog7.png'), require('../assets/dogs/dog8.png'), require('../assets/dogs/dog9.png')];
export const sadimages = [require('../assets/dogs/sad1.png'), require('../assets/dogs/sad2.png'), require('../assets/dogs/sad3.png'), require('../assets/dogs/sad4.png'), require('../assets/dogs/sad5.png'), require('../assets/dogs/sad6.png'), require('../assets/dogs/sad7.png'), require('../assets/dogs/sad8.png'), require('../assets/dogs/sad9.png')];
export const sideimages = [require('../assets/dogs/side1.png'), require('../assets/dogs/side2.png'), require('../assets/dogs/side3.png'), require('../assets/dogs/side4.png'), require('../assets/dogs/side5.png'), require('../assets/dogs/side6.png'), require('../assets/dogs/side7.png'), require('../assets/dogs/side8.png'), require('../assets/dogs/side9.png')];
export const sniffimages = [require('../assets/dogs/sniff1.png'), require('../assets/dogs/sniff2.png'), require('../assets/dogs/sniff3.png'), require('../assets/dogs/sniff4.png'), require('../assets/dogs/sniff5.png'), require('../assets/dogs/sniff6.png'), require('../assets/dogs/sniff7.png'), require('../assets/dogs/sniff8.png'), require('../assets/dogs/sniff9.png')];


export const allValues = [{id: 0, value: "Sustainability"}, {id: 1, value: "Paid Maternity Leave"}, {id: 2, value: "Diversity and Inclusion"}, {id: 3, value: "Accessibility"}, {id: 4, value: "Wages"}, {id: 5, value: "Health Care for Workers"}, {id: 6, value: "Anti-Child Labor Polocies"}, {id: 7, value: "Charity"}, {id: 8, value: "Workers' Rights"}, {id: 9, value: "Anti-Discrimination"}, {id: 10, value: "Animal Cruelty/Testing"}, {id: 11, value: "Privacy"}, {id: 12, value: "COVID-19 Policies"}, {id: 13, value: "Ability to Unionize"}, {id: 14, value: "Reduced Water Use"}, {id: 15, value: "Transparency"}, {id: 16, value: "Greenwashing"}, {id: 17, value: "Eco-Friendly"}, {id: 18, value: "Women's Rights"}, {id: 19, value: "LGBTQ+ Rights"}, {id: 20, value: "Supporting POC Owned Businesses"}];

export const tateRankings = {"Sustainability": 7, "Paid Maternity Leave": 5, "Diversity and Inclusion": 6, "Accessibility": 9, "Wages": 8, "Health Care for Workers": 9, "Anti-Child Labor Polocies": 5, "Charity": 8, "Workers' Rights": 10, "Anti-Discrimination": 6, "Animal Cruelty/Testing": 10, "Privacy": 8, "COVID-19 Policies": 9, "Ability to Unionize": 7, "Reduced Water Use": 7, "Transparency": 8, "Greenwashing": 10, "Eco-Friendly": 8, "Women's Rights": 8, "LGBTQ+ Rights": 7, "Supporting POC Owned Businesses": 6};
export const tjRankings = {"Sustainability": 4, "Paid Maternity Leave": 3, "Diversity and Inclusion": 1, "Accessibility": 2, "Wages": 5, "Health Care for Workers": 8, "Anti-Child Labor Polocies": 4, "Charity": 7, "Workers' Rights": 10, "Anti-Discrimination": 4, "Animal Cruelty/Testing": 8, "Privacy": 2, "COVID-19 Policies": 4, "Ability to Unionize": 5, "Reduced Water Use": 5, "Transparency": 6, "Greenwashing": 9, "Eco-Friendly": 5, "Women's Rights": 1, "LGBTQ+ Rights": 4, "Supporting POC Owned Businesses": 3};

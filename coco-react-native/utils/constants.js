import { Text, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {
  createContext
} from 'react';


export const COLORS = {
  background: '#FEFADC',
  //lightGreen: '#B1E693',
  darkGreen: '#07500A',
  lightGreen: '#93d075',
}

export const MAINFONT = 'Comfortaa_400Regular';
export const BOLDFONT = 'Comfortaa_700Bold';


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
  'American Eagle': require('../assets/company-logos/americaneagle.png'),
  'Trader Joe\'s': require('../assets/company-logos/traderjoes.png'),
  'Tate\'s': require('../assets/company-logos/tates.png'),
  'Kerrygold': require('../assets/company-logos/kerrygold.png'),
  'Organic Valley': require('../assets/company-logos/organicvalley.png'),
  'Skinny Pop': require('../assets/company-logos/skinnypop.png'),
  'Stella Rosa': require('../assets/company-logos/stellarosa.png'),
}

export const storeNews = {
  'Amazon': [
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
  'American Eagle': [],
  'Trader Joe\'s': [
    {
      source: 'NYT',
      title: 'Petition Urges Trader Joe\'s to Get Rid of \'Racist Branding\'',
      link: 'https://www.nytimes.com/2020/07/19/business/trader-joes-petition.html'
    },
    {
      source: 'KCRW',
      title: 'Inside the bizarre business strategies of Trader Joe\'s',
      link: 'https://www.kcrw.com/news/shows/greater-la/wildfires-trader-joes-surveillance/joe-coulombe'
    }
  ],
  'Tate\'s': [
    {
      source: 'Food Business News',
      title: 'Tate\'s Bake Shop taps new leader',
      link: 'https://www.foodbusinessnews.net/articles/15339-tates-bake-shop-taps-new-leader'
    },
    {
      source: 'Bake Magazine',
      title: 'Tate\'s Bake Shop introduces Blueberry Crisp Cookies',
      link: 'https://www.bakemag.com/articles/14622-tates-bake-shop-introduces-blueberry-crisp-cookies'
    }
  ],
  'Kerrygold': [
    {
      source: 'FPT',
      title: 'Ornua\'s Kerrygold Butter Production Plant, Mitchelstown, Co, Cork, Ireland',
      link: 'https://www.foodprocessing-technology.com/projects/ornuas-kerrygold-butter-production-plant-mitchelstown-co-cork/'
    },
    {
      source: 'Bloomberg',
      title: 'Irish Butter Kerrygold has conquered America\'s Kitchen',
      link: 'https://www.bloomberg.com/news/features/2019-10-02/how-irish-butter-kerrygold-conquered-america-s-kitchens'
    }
  ],
  'Organic Valley': [
    {
      source: 'Cision',
      title: 'Organic Valley Announces 2022 Initiatives to Save Northeast Family Dairy Farms',
      link: 'https://www.prnewswire.com/news-releases/organic-valley-announces-2022-initiatives-to-save-northeast-family-dairy-farms-301463996.html'
    },
    {
      source: 'Statesman Journal',
      title: '\'Saving small organic family farms\': Organic Valley rebuilding McMinnville creamery',
      link: 'https://www.statesmanjournal.com/story/news/2021/10/24/organic-valley-rebuilding-mcminnville-creamery/6143205001/'
    }
  ],
  'Skinny Pop': [
    {
      source: 'Mashed',
      title: 'The Untold Truth Of SkinnyPop',
      link: 'https://www.mashed.com/655854/the-untold-truth-of-skinnypop/'
    },
    {
      source: 'The Daily Journal',
      title: '\'Skinny\' popcorn buyers say no kernel of truth in health claims',
      link: 'https://www.smdailyjournal.com/news/local/skinny-popcorn-buyers-say-no-kernel-of-truth-in-health-claims/article_29a8c4ec-76b0-5b6a-8f9c-28d169c29635.html'
    }
  ],
  'Stella Rosa': [
    {
      source: 'Business Wire',
      title: 'Stella Rosa Joins the Non-Alcoholic Wine Category with Stella Rosa Non-Alcoholics',
      link: 'https://www.businesswire.com/news/home/20220105005825/en/Stella-Rosa-Joins-the-Non-Alcoholic-Wine-Category-with-Stella-Rosa-Non-Alcoholics'
    },
    {
      source: 'Vine Pair',
      title: '13 Things You Should Know About Stella Rosa',
      link: 'https://vinepair.com/articles/stella-rosa-red-black-moscato-wine-guide/'
    }
  ],
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
  'American Eagle': {},
  'Trader Joe\'s': {
    'Sustainability': 4,
    'Accessibility': 8,
    'Workers\' Rights': 6
  },
  'Tate\'s': {
    'Sustainability': 5,
    'Accessibility': 6,
    'Workers\' Rights': 1
  },
  'Kerrygold': {
    'Sustainability': 3,
    'Accessibility': 8,
    'Workers\' Rights': 5
  },
  'Organic Valley': {
    'Sustainability': 6,
    'Accessibility': 9,
    'Workers\' Rights': 8
  },
  'Skinny Pop': {
    'Sustainability': 5,
    'Accessibility': 7,
    'Workers\' Rights': 6
  },
  'Stella Rosa': {
    'Sustainability': 8,
    'Accessibility': 9,
    'Workers\' Rights': 8
  },
}


export const storeSpecificNews = {
  'Amazon': {
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
  },
  'Trader Joe\'s': {
    'Sustainability': [
      {
        source: 'Daily Californian',
        title: 'How sustainable is Trader Joe\'s business model?',
        link: 'https://www.dailycal.org/2021/03/16/how-sustainable-is-trader-joes-business-model/'
      },
      {
        source: 'Veg News',
        title: 'NEW FROZEN TREATS AT TRADER JOE\'S, ECO PIZZA, AND MORE VEGAN FOOD NEWS OF THE WEEK',
        link: 'https://vegnews.com/2022/2/vegan-food-news-of-the-week-february-18'
      }
    ],
    'Accessibility': [
      {
        source: 'Eat This, Not That',
        title: 'This Is How Far Shoppers Will Travel to Shop at Trader Joe\'s',
        link: 'https://www.eatthis.com/news-how-far-shoppers-travel-for-trader-joes/'
      },
      {
        source: 'NY Post',
        title: 'Gristedes supermarket adds security to stores after \'hamburglar\' heist at Trader Joe\'s',
        link: 'https://nypost.com/2022/02/10/nyc-supermarket-chain-adds-security-after-hamburglar-heist-at-trader-joes/'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'Daily Mail',
        title: 'NYC subway stabbings rocket by 35% in a year, as Trader Joes\' worker is horrifically slashed across face',
        link: 'https://www.dailymail.co.uk/news/article-10530543/NYC-subway-stabbings-spike-35-Trader-Joes-worker-slashed-face-latest-incident.html'
      },
      {
        source: 'NY Post',
        title: 'Another shoplifter targets NYC Trader Joe\'s — one day after thief took steaks',
        link: 'https://nypost.com/2022/02/09/another-shoplifter-targets-nyc-trader-joes-in-east-village/'
      }
    ],
  },
  'Tate\'s': {
    'Sustainability': [
      {
        source: 'People',
        title: 'Tate\'s Has 2 New Cookie Flavors and You Can Order Them Online',
        link: 'https://people.com/food/tates-has-2-new-cookie-flavors-and-you-can-order-them-online/'
      },
      {
        source: 'Veg News',
        title: 'TATE\'S BAKE SHOP JUST LAUNCHED ITS FIRST VEGAN COOKIES',
        link: 'https://vegnews.com/2021/12/tates-bake-shop-vegan-cookies'
      }
    ],
    'Accessibility': [
      {
        source: 'Business Insider',
        title: 'The workers who make America\'s \'best chocolate-chip cookie\' say an anti-union employee threatened violence and claimed MS-13 gang ties',
        link: 'https://www.businessinsider.com/tate-union-supporters-report-violent-threats-ms-13-fears-2021-4'
      },
      {
        source: 'Newsday',
        title: 'NLRB complaint filed over union vote at Tate\'s cookie factory',
        link: 'https://www.newsday.com/business/tate-s-bake-shop-union-vote-1.50252573'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'News 12',
        title: 'Union officials: Tate\'s Bake Shop workers threatened with deportation if they unionize',
        link: 'https://bronx.news12.com/union-officials-tates-bake-shop-workers-threatened-with-deportation-if-they-unionize'
      },
      {
        source: 'Long Island Press',
        title: 'Tate\'s Bake Shop Employees Reject Bid to Unionize',
        link: 'https://www.longislandpress.com/2021/05/14/tates-bake-shop-employees-reject-bid-to-unionize/'
      }
    ],
  },
  'Kerrygold': {
    'Sustainability': [
      {
        source: 'DW',
        title: 'Butter wars: Kerrygold wins EU trademark battle',
        link: 'https://www.dw.com/en/butter-wars-kerrygold-wins-eu-trademark-battle/a-56843166'
      },
      {
        source: 'Irish Central',
        title: 'Kerrygold butter facing US lawsuit over "grass-fed cow" claims',
        link: 'https://www.irishcentral.com/culture/food-drink/kerrygold-lawsuit-grass-fed'
      }
    ],
    'Accessibility': [
      {
        source: 'Business Insider',
        title: 'The workers who make America\'s \'best chocolate-chip cookie\' say an anti-union employee threatened violence and claimed MS-13 gang ties',
        link: 'https://www.businessinsider.com/tate-union-supporters-report-violent-threats-ms-13-fears-2021-4'
      },
      {
        source: 'Dairy Foods',
        title: 'Kerrygold launches Irish butter with olive oil',
        link: 'https://www.dairyfoods.com/articles/94873-kerrygold-launches-irish-butter-with-olive-oil'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'The Irish Times',
        title: 'Ornua eyes €2bn in Kerrygold sales as group reports record turnover for 2020',
        link: 'https://www.irishtimes.com/business/agribusiness-and-food/ornua-eyes-2bn-in-kerrygold-sales-as-group-reports-record-turnover-for-2020-1.4542853'
      },
      {
        source: 'Independent',
        title: '€40m Kerrygold plant on hold after engineer lodges planning objection',
        link: 'https://www.independent.ie/business/irish/40m-kerrygold-plant-on-hold-afterengineer-lodges-planning-objection-40709499.html'
      }
    ],
  },
  'Organic Valley': {
    'Sustainability': [
      {
        source: 'Organic Eye',
        title: 'The Crisis in Organic Farming has Divided Advocates on how to Protect Organic Integrity',
        link: 'https://organiceye.org/crisis-in-organic-farming-divided-advocates-protect-organic-integrity/'
      },
      {
        source: 'News 8000',
        title: 'Organic Valley hits record $1.2 billion in sales',
        link: 'https://www.news8000.com/organic-valley-hits-record-1-2-billion-in-sales/'
      }
    ],
    'Accessibility': [
      {
        source: 'Park Rapids Enterprise',
        title: 'Organic Valley farms in southeast Minnesota grateful they made the turn to organic',
        link: 'https://www.parkrapidsenterprise.com/business/organic-valley-farms-in-southeast-minnesota-grateful-they-made-the-turn-to-organic'
      },
      {
        source: 'Wisconsin Examiner',
        title: 'Organic Valley struggles, then surges in turbulent dairy market',
        link: 'https://wisconsinexaminer.com/2020/04/20/organic-valley-struggles-then-surges-in-turbulent-dairy-market/'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'Dairy Herd',
        title: 'Organic Valley Farmers Receive National Dairy Quality Awards',
        link: 'https://www.dairyherd.com/news/sustainability/organic-valley-farmers-receive-national-dairy-quality-awards'
      },
      {
        source: 'Tasting Table',
        title: 'The Real Reason Small Dairy Farms Are Rapidly Closing',
        link: 'https://www.tastingtable.com/725575/the-real-reason-small-dairy-farms-are-rapidly-closing/'
      }
    ],
  },
  'Skinny Pop': {
    'Sustainability': [
      {
        source: 'CNBC',
        title: 'Hershey in $1.6 billion deal to acquire SkinnyPop parent Amplify',
        link: 'https://www.cnbc.com/2017/12/18/hershey-in-1-point-6-billion-deal-to-acquire-skinnypop-parent-amplify.html'
      },
      {
        source: 'The Hershey Company',
        title: 'The SkinnyPop Story: How We\'re Building a Mega-brand',
        link: 'https://www.thehersheycompany.com/en_us/home/newsroom/blog/the-skinnypop-story-how-were-building-a-megabrand.html'
      }
    ],
    'Accessibility': [
      {
        source: 'Food Business News',
        title: 'SkinnyPop goes sweet',
        link: 'https://www.foodbusinessnews.net/articles/18215-skinnypop-goes-sweet'
      },
      {
        source: 'The Street',
        title: 'Why Maker of SkinnyPop Popcorn May be Having a Nasty IPO',
        link: 'https://www.thestreet.com/investing/will-skinnypop-maker-amplify-brands-still-be-mouth-watering-post-ipo-13244901'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'Chicago Business',
        title: 'SkinnyPop parent goes public valuing the popcorn startup at $1.35 billion',
        link: 'https://www.chicagobusiness.com/article/20150805/NEWS07/150809926/skinnypop-parent-goes-public-valuing-the-popcorn-startup-at-1-35-billion'
      },
      {
        source: 'The Garage',
        title: 'Family Dinner: Andy Friedman of SkinnyPop',
        link: 'https://thegarage.northwestern.edu/news/1766-2/'
      }
    ],
  },
  'Stella Rosa': {
    'Sustainability': [
      {
        source: 'LA Times',
        title: 'The story behind Stella Rosa, and all those super extra billboards',
        link: 'https://www.latimes.com/food/dailydish/la-fo-dr-stella-rosa-20181015-story.html'
      },
      {
        source: 'Shanken News Daily',
        title: 'Riboli Family\'s Stella Rosa On A Sharp Rise',
        link: 'https://www.shankennewsdaily.com/index.php/2018/01/11/19964/riboli-familys-stella-rosa-sharp-rise/'
      }
    ],
    'Accessibility': [
      {
        source: 'Statista',
        title: 'Growth of sparkling wine sales volume in the United States in 2018, by brand',
        link: 'https://www.statista.com/statistics/972844/sparkling-wine-volume-growth-us-brand/'
      },
      {
        source: 'DPF Law',
        title: 'Stella Rosa Trumpets Pyrrhic Trade Dress “Victory” Over Constellation',
        link: 'https://www.dpf-law.com/blogs/lex-vini/stella-rosa-trumpets-pyrrhic-trade-dress-victory-constellation/'
      }
    ],
    'Workers\' Rights': [
      {
        source: 'Benzinga',
        title: 'Where\'s Stella Rosa?',
        link: 'https://www.benzinga.com/pressreleases/20/08/b17247561/wheres-stella-rosa'
      },
      {
        source: 'Law 360',
        title: 'Winemaker Says Anheuser-Busch Breached \'Stella\' TM Deal',
        link: 'https://www.law360.com/articles/1343614/winemaker-says-anheuser-busch-breached-stella-tm-deal'
      }
    ],
  },
}

export const dogimages = [require('../assets/dogs/dog1.png'), require('../assets/dogs/dog2.png'), require('../assets/dogs/dog3.png'), require('../assets/dogs/dog4.png'), require('../assets/dogs/dog5.png'), require('../assets/dogs/dog6.png'), require('../assets/dogs/dog7.png'), require('../assets/dogs/dog8.png'), require('../assets/dogs/dog9.png')];
export const sadimages = [require('../assets/dogs/sad1.png'), require('../assets/dogs/sad2.png'), require('../assets/dogs/sad3.png'), require('../assets/dogs/sad4.png'), require('../assets/dogs/sad5.png'), require('../assets/dogs/sad6.png'), require('../assets/dogs/sad7.png'), require('../assets/dogs/sad8.png'), require('../assets/dogs/sad9.png')];
export const sideimages = [require('../assets/dogs/side1.png'), require('../assets/dogs/side2.png'), require('../assets/dogs/side3.png'), require('../assets/dogs/side4.png'), require('../assets/dogs/side5.png'), require('../assets/dogs/side6.png'), require('../assets/dogs/side7.png'), require('../assets/dogs/side8.png'), require('../assets/dogs/side9.png')];
export const sniffimages = [require('../assets/dogs/sniff1.png'), require('../assets/dogs/sniff2.png'), require('../assets/dogs/sniff3.png'), require('../assets/dogs/sniff4.png'), require('../assets/dogs/sniff5.png'), require('../assets/dogs/sniff6.png'), require('../assets/dogs/sniff7.png'), require('../assets/dogs/sniff8.png'), require('../assets/dogs/sniff9.png')];
export const winkimages = [require('../assets/dogs/wink1.png'), require('../assets/dogs/wink2.png'), require('../assets/dogs/wink3.png'), require('../assets/dogs/wink4.png'), require('../assets/dogs/wink5.png'), require('../assets/dogs/wink6.png'), require('../assets/dogs/wink7.png'), require('../assets/dogs/wink8.png'), require('../assets/dogs/wink9.png')];


export const allValues = [{id: 0, value: "Sustainability"}, {id: 1, value: "Paid Maternity Leave"}, {id: 2, value: "Diversity and Inclusion"}, {id: 3, value: "Accessibility"}, {id: 4, value: "Wages"}, {id: 5, value: "Health Care for Workers"}, {id: 6, value: "Anti-Child Labor Polocies"}, {id: 7, value: "Charity"}, {id: 8, value: "Workers' Rights"}, {id: 9, value: "Anti-Discrimination"}, {id: 10, value: "Animal Cruelty/Testing"}, {id: 11, value: "Privacy"}, {id: 12, value: "COVID-19 Policies"}, {id: 13, value: "Ability to Unionize"}, {id: 14, value: "Reduced Water Use"}, {id: 15, value: "Transparency"}, {id: 16, value: "Greenwashing"}, {id: 17, value: "Eco-Friendly"}, {id: 18, value: "Women's Rights"}, {id: 19, value: "LGBTQ+ Rights"}, {id: 20, value: "Supporting POC Owned Businesses"}];

export const tateRankings = {"Sustainability": 7, "Paid Maternity Leave": 5, "Diversity and Inclusion": 6, "Accessibility": 9, "Wages": 8, "Health Care for Workers": 9, "Anti-Child Labor Polocies": 5, "Charity": 8, "Workers' Rights": 10, "Anti-Discrimination": 6, "Animal Cruelty/Testing": 10, "Privacy": 8, "COVID-19 Policies": 9, "Ability to Unionize": 7, "Reduced Water Use": 7, "Transparency": 8, "Greenwashing": 10, "Eco-Friendly": 8, "Women's Rights": 8, "LGBTQ+ Rights": 7, "Supporting POC Owned Businesses": 6};
export const tjRankings = {"Sustainability": 4, "Paid Maternity Leave": 3, "Diversity and Inclusion": 1, "Accessibility": 2, "Wages": 5, "Health Care for Workers": 8, "Anti-Child Labor Polocies": 4, "Charity": 7, "Workers' Rights": 10, "Anti-Discrimination": 4, "Animal Cruelty/Testing": 8, "Privacy": 2, "COVID-19 Policies": 4, "Ability to Unionize": 5, "Reduced Water Use": 5, "Transparency": 6, "Greenwashing": 9, "Eco-Friendly": 5, "Women's Rights": 1, "LGBTQ+ Rights": 4, "Supporting POC Owned Businesses": 3};

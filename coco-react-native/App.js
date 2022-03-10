import React, {
  createContext, 
  useState
} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Landing from './components/Landing';
import Intro1 from './components/Onboarding/Intro1';
import Intro2 from './components/Onboarding/Intro2';
import Intro3 from './components/Onboarding/Intro3';
import Intro4 from './components/Onboarding/Intro4';
import Intro5 from './components/Onboarding/Intro5';
import CustomDog from './components/CustomDog';
import SaveDog from './components/SaveDog';
import SaveValues from './components/SaveValues';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoCo from './components/CoCo'
import Profile from './components/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fetch1 from './components/Fetch/Fetch1';
import Fetch2 from './components/Fetch/Fetch2';
import Fetch3 from './components/Fetch/Fetch3';
import Fetch4 from './components/Fetch/Fetch4';
import { COLORS, allAssets } from './utils/constants'
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';
import Values from './components/Values';
import { UserContext } from './utils/constants';
import Bookmarks from './components/Bookmarks'
import RecentPurchases from './components/RecentPurchases';
import CoCoBones from './components/CoCoBones';
import CompareMain from './components/Compare/CompareMain';
import Scan1 from './components/Compare/Scan1';
import Scan2 from './components/Compare/Scan2';
import Scan3 from './components/Compare/Scan3';
import Scan4 from './components/Compare/Scan4';
import Search1 from './components/Compare/Search1';
import Sniff1 from './components/Sniff/Sniff1';
import Sniff2 from './components/Sniff/Sniff2';
import Sniff3 from './components/Sniff/Sniff3';
import Sniff4 from './components/Sniff/Sniff4';
import {useAssets} from 'expo-asset';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  
  // This is the way you have to declare new stuff to be tracked in state
  const [bookmarks, setBookmarks] = useState([]);
  const addBookmark = (article) => {
    setBookmarks([...bookmarks, article]);
  }
  const removeBookmark = (article) => {
    let newBookmarks = [...bookmarks]
    newBookmarks.splice(newBookmarks.indexOf(article), 1)
    setBookmarks(newBookmarks)
  }

  //for recent purchases
  const [purchases, setPurchases] = useState([]);

  //for CoCo Bones
  const [bones, setBones] = useState(0);

  // For saving values
  const [values, setValues] = useState([]);
  const addValue = (value) => {
    setValues([...values, value]);
  }
  const removeValue = (value) => {
    let newValues = [...values]
    let index = newValues.findIndex(object => {
      return object.id === value.id;
    });
    newValues.splice(index, 1)
    setValues(newValues)
  }

  // For saving dog number
  const [dogNum, setDogNum] = useState(0);

  // For the loaded in pictures for scan1
  const [aSet, setASet] = useState(false);
  const [bSet, setBSet] = useState(false);

  // Wow this actually works crazy (but causes soome lag)
  // const [assets, error] = useAssets(allAssets); 

  // Load fonts. Return expo loading screen if not loaded
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  

  return (
    <UserContext.Provider value={{bones, setBones, purchases, setPurchases, bookmarks, addBookmark, removeBookmark, dogNum, setDogNum, values, addValue, removeValue, aSet, bSet, setASet, setBSet}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
          <Stack.Screen name="Onboarding" component={OnboardingTab}/>
          <Stack.Screen name="MainApp" component={MainAppNav}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

function OnboardingTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = 'person';
        } 
        else if (route.name === 'Landing') {
          iconName = 'home';
        }
        else if (route.name === 'CoCo') {
          iconName = 'paw';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={45} color={color}/>;
      },
      tabBarActiveTintColor: COLORS.darkGreen,
      tabBarInactiveTintColor: COLORS.darkGreen,
      tabBarStyle: {
        backgroundColor: COLORS.lightGreen,
        paddingBottom: 0,
      },
      tabBarShowLabel: false,
      })}
    >
      <Tab.Screen 
        name="Profile" 
        component={OnboardingStack} 
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen 
        name="Landing" 
        component={OnboardingStack}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen 
        name="CoCo" 
        component={OnboardingStack}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }} 
      />
    </Tab.Navigator>
  )
}

function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="Intro1" component={Intro1}/>
      <Stack.Screen name="Intro2" component={Intro2}/>
      <Stack.Screen name="Intro3" component={Intro3}/>
      <Stack.Screen name="Intro4" component={Intro4}/>
      <Stack.Screen name="Intro5" component={Intro5}/>
      <Stack.Screen name="Values" component={Values}/>
      <Stack.Screen name="SaveValues" component={SaveValues}/>
      <Stack.Screen name="Landing" component={Landing}/>
    </Stack.Navigator>
  )
}


function MainAppNav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = 'person';
        } 
        else if (route.name === 'Landing') {
          iconName = 'home';
        }
        else if (route.name === 'CoCo') {
          iconName = 'paw';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={45} color={color}/>;
      },
      tabBarActiveTintColor: COLORS.background,
      tabBarInactiveTintColor: COLORS.darkGreen,
      tabBarStyle: {
        backgroundColor: COLORS.lightGreen,
        paddingBottom: 0,
      },
      tabBarShowLabel: false,
      })}
      initialRouteName="Landing"
    >
      <Tab.Screen name="Profile" component={ProfileNav} />
      <Tab.Screen name="Landing" component={LandingNav} />
      <Tab.Screen name="CoCo" component={CoCoNav} />
      {/* <Tab.Screen
        name="Chat"
        component={Landing}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      /> */}
    </Tab.Navigator>
  )
}

function LandingNav() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="LandingMain" component={Landing}/>
      <Stack.Screen name="Fetch1" component={Fetch1}/>
      <Stack.Screen name="Fetch2" component={Fetch2}/>
      <Stack.Screen name="Fetch3" component={Fetch3}/>
      <Stack.Screen name="Fetch4" component={Fetch4}/>
      <Stack.Screen name="CompareMain" component={CompareMain}/>
      <Stack.Screen name="Scan1" component={Scan1}/>
      <Stack.Screen name="Scan2" component={Scan2}/>
      <Stack.Screen name="Scan3" component={Scan3}/>
      <Stack.Screen name="Scan4" component={Scan4}/>
      <Stack.Screen name="Search1" component={Search1}/>
      <Stack.Screen name="Sniff1" component={Sniff1}/>
      <Stack.Screen name="Sniff2" component={Sniff2}/>
      <Stack.Screen name="Sniff3" component={Sniff3}/>
      <Stack.Screen name="Sniff4" component={Sniff4}/>
    </Stack.Navigator>
  )
}

function ProfileNav() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="ProfileMain" component={Profile}/>
      <Stack.Screen name="Bookmarks" component={Bookmarks}/>
      <Stack.Screen name="Fetch4" component={Fetch4}/>
      <Stack.Screen name="ProfileValues" component={Values}/>
      <Stack.Screen name="RecentPurchases" component={RecentPurchases}/>

    </Stack.Navigator>
  )
}

function CoCoNav() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="CoCoMain" component={CoCo}/>
      <Stack.Screen name="CustomDog" component={CustomDog}/>
      <Stack.Screen name="SaveDog" component={SaveDog}/>
      <Stack.Screen name="CoCoBones" component={CoCoBones}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

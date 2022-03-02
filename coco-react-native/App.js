import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Customdog from './components/CustomDog';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Coco from './components/Coco';
import Profile from './components/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
        <Stack.Screen name="TestTab" component={TabNav}/>
        <Stack.Screen name="Intro1" component={Intro1}/>
        <Stack.Screen name="Intro2" component={Intro2}/>
        <Stack.Screen name="CustomDog" component={Customdog}/>
        <Stack.Screen name="Landing" component={Landing}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function StackNav() {
//   return (
//     <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
//       <Stack.Screen name="Intro1" component={Intro1}/>
//       <Stack.Screen name="Intro2" component={Intro2}/>
//       <Stack.Screen name="CustomDog" component={Customdog}/>
//       <Stack.Screen name="Landing" component={Landing}/>
//     </Stack.Navigator>
//   )
// }

function TabNav() {
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
        else if (route.name === 'Coco') {
          iconName = 'paw';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={35} color={color} />;
      },
      tabBarActiveTintColor: '#f9f9f1',
      tabBarInactiveTintColor: '#07500A',
      tabBarStyle: {
        backgroundColor: '#93d075',
      },
      tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileNav} />
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="Coco" component={Coco} />
    </Tab.Navigator>
  )
}

function ProfileNav() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="ProfileMain" component={Profile}/>
    </Stack.Navigator>
  )
}

function CocoNav() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false  }}>
      <Stack.Screen name="CocoMain" component={Coco}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

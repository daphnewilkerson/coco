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
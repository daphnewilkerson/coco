import React, {
  useContext
} from 'react';
import { StyleSheet, Pressable, Text  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, MAINFONT, BOLDFONT, UserContext } from '../utils/constants';



export default function NewsBlurb(props){

  const navigation = useNavigation();

  const { bookmarks, addBookmark, removeBookmark } = useContext(
    UserContext
  );

  const handleBookmark = (story) => {
    if (bookmarks.includes(story)) {
      removeBookmark(story);
    }
    else {
      addBookmark(story);
    }
  }

  return (
    <Pressable key={props.story.title} style={styles.newsBlurb} onPress={() => navigation.navigate('Fetch4', {link: props.story.link})}>
      <Text style={styles.source}>{props.story.source}</Text>
      <Text style={styles.title}>{props.story.title}</Text>
      <Pressable style={styles.bookmarkContainer} onPress={() => handleBookmark(JSON.stringify(props.story))}>
        {
          bookmarks.includes(JSON.stringify(props.story)) ?
          <Icon name="bookmark" size={25} style={styles.bookmark}/>
          :
          <Icon name="bookmark-outline" size={25} style={styles.bookmark}/>
        }
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
    fontSize: 13,
    color: COLORS.darkGreen,
    top: 10,
    left: 10,
  },
  title: {
    fontFamily: MAINFONT,
    fontSize: 18,
    color: COLORS.darkGreen,
    marginTop: 15,
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
})


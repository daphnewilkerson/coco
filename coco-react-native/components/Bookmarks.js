import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, {
  useContext
} from 'react'
import { COLORS, MAINFONT, Back, UserContext } from '../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Bookmarks({ route, navigation }) {

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
    <View style={styles.container}>
      <Back/>
      <Text style={styles.pageTitle}>Bookmarks</Text>
      <ScrollView style={styles.listContainer} contentContainerStyle={{ alignItems: 'center' }}>
        {
          bookmarks.length === 0 ?
          <Text style={styles.noBookmarksText}>You don't have any bookmarks yet...</Text>
          :
          <></>
        }
        {
          bookmarks.map(storyString => {
            let story = JSON.parse(storyString);
            return (
              <Pressable key={story.title} style={styles.newsBlurb} onPress={() => navigation.navigate('Fetch4', {link: story.link})}>
                <Text style={styles.source}>{story.source}</Text>
                <Text style={styles.title}>{story.title}</Text>
                <Pressable style={styles.bookmarkContainer} onPress={() => handleBookmark(storyString)}>
                  {
                    bookmarks.includes(storyString) ?
                    <Icon name="bookmark" size={25} style={styles.bookmark}/>
                    :
                    <Icon name="bookmark-outline" size={25} style={styles.bookmark}/>
                  }
                </Pressable>
              </Pressable>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 100
  },
  pageTitle: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 45,
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
  listContainer: {
    width: '100%',
    height: '95%',
  },
  noBookmarksText: {
    color: COLORS.darkGreen,
    fontFamily: MAINFONT,
    fontSize: 30,
    marginTop: 100,
  }
})
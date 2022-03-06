import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, {
  useContext
} from 'react'
import { COLORS, MAINFONT, BOLDFONT, Back, UserContext } from '../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import NewsBlurb from './NewsBlurb';

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
              <NewsBlurb key={story.title} story={story}/>
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
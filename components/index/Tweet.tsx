import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface TweetProps {
  user: {
    name: string;
    handle: string;
    profileImage: string;
  };
  content: string;
  timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ user, content, timestamp }) => {
  return (
    <View style={styles.tweetContainer}>
      <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/018/249/188/original/happy-cat-transparent-background-png.png" }} style={styles.profileImage} />
      <View style={styles.tweetContent}>
        <View style={styles.tweetHeader}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userHandle}>@{user.handle}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
        <Text style={styles.tweetText}>{content}</Text>
        <View style={styles.tweetFooter}>
          <FontAwesome name="comment-o" style={styles.icon} />
          <FontAwesome name="retweet" style={styles.icon} />
          <FontAwesome name="heart-o" style={styles.icon} />
          <FontAwesome name="share" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  userHandle: {
    color: '#657786',
    marginRight: 5,
  },
  timestamp: {
    color: '#657786',
  },
  tweetText: {
    marginVertical: 5,
  },
  tweetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  icon: {
    fontSize: 20,
    color: '#657786',
  },
});

export default Tweet;
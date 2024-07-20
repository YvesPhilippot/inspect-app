import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getTweets } from '@/database';
import Tweet from './Tweet';

interface TweetListProps {
    listTweets: {
      user: {
        name: string;
        handle: string;
        profileImage: string;
      };
      content: string;
      timestamp: string;
    }[];
  }
  const TweetList: React.FC<TweetListProps> = ({ listTweets }) => {
    if (listTweets.length === 0) {
      return <Text style={styles.emptyMessage}>Aucun tweet disponible.</Text>;
    }

    const renderTweet = ({ item }: { item: any }) => (

        <Tweet
            user={{
                name: item.userName,
                handle: item.userHandle,
                profileImage: item.profileImage
            }}
            content={item.content}
            timestamp={item.timestamp}
        />
    );

    return (
        <FlatList
            data={listTweets}
            keyExtractor={(item) => item.timestamp.toString()}
            renderItem={renderTweet}
        />
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
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
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
});

export default TweetList;
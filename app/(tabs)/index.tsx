import Tweet from '@/components/index/Tweet';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Tweet
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileImage: 'https://example.com/johndoe.jpg',
        }}
        content="This is a tweet example!"
        timestamp="2h"
      />
       <Tweet
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileImage: 'https://example.com/johndoe.jpg',
        }}
        content="This is a tweet example!"
        timestamp="2h"
      />
       <Tweet
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileImage: 'https://example.com/johndoe.jpg',
        }}
        content="This is a tweet example!"
        timestamp="2h"
      />
       <Tweet
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileImage: 'https://example.com/johndoe.jpg',
        }}
        content="This is a tweet example!"
        timestamp="2h"
      />
       <Tweet
        user={{
          name: 'John Doe',
          handle: 'johndoe',
          profileImage: 'https://example.com/johndoe.jpg',
        }}
        content="This is a tweet example!"
        timestamp="2h"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 10,
  },
});

export default HomeScreen;

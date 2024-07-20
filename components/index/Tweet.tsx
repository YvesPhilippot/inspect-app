import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TweetReply from './TweetReply';
import { format } from 'date-fns'; // Assurez-vous d'installer date-fns


interface TweetProps {
    user: {
      name: string;
      handle: string;
      profileImage: string;
    };
    content: string;
    timestamp: Date;
  }
  
  interface Reply {
    id: string;
    user: {
      name: string;
      handle: string;
    };
    content: string;
  }
  
  const Tweet: React.FC<TweetProps> = ({ user, content, timestamp }) => {
   
    const [replies, setReplies] = useState<Reply[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleReply = (replyText: string) => {
      setReplies([
        ...replies,
        {
          id: (replies.length + 1).toString(),
          user: {
            name: 'You',
            handle: 'yourhandle',
          },
          content: replyText,
        },
      ]);
    };

    const renderProperDate = () =>{
            // Convertir la chaîne timestamp en Date
 
        return  format(timestamp, 'dd MMM yyyy, HH:mm'); // Exemple de format
    }
  
    return (
      <View style={styles.tweetContainer}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <View style={styles.tweetContent}>
          <View style={styles.tweetHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userHandle}>@{user.handle}</Text>
          </View>
            <Text style={styles.timestamp}>{renderProperDate()}</Text>
          </View>
          <Text style={styles.tweetText}>{content}</Text>
          <View style={styles.tweetFooter}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <FontAwesome name="comment-o" style={styles.icon} />
            </TouchableOpacity>
            <FontAwesome name="retweet" style={styles.icon} />
            <FontAwesome name="heart-o" style={styles.icon} />
            <FontAwesome name="share" style={styles.icon} />
          </View>
          <FlatList
            data={replies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.reply}>
                <Text style={styles.replyUser}>{item.user.name} @{item.user.handle}:</Text>
                <Text style={styles.replyContent}>{item.content}</Text>
              </View>
            )}
          />
        </View>
        <TweetReply
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onSubmit={handleReply}
        />
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
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    tweetContent: {
      flex: 1,
      marginLeft: 10,
    },
    tweetHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Align items between the left and right
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
      fontStyle: "italic",
      textAlign: 'right' // Ensure text is right aligned
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
    reply: {
      padding: 5,
      borderTopWidth: 1,
      borderTopColor: '#e1e8ed',
      marginTop: 5,
    },
    replyUser: {
      fontWeight: 'bold',
    },
    replyContent: {
      marginTop: 2,
    },
  });
  
  export default Tweet;
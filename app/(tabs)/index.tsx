import TweetList from '@/components/index/TweetList';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AddTweetModal from '@/components/index/AddTweetModal';
import { getTweets } from '@/database';


const HomeScreen: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    // Initialiser la liste des tweets lorsque le composant est monté
    refreshTweets();
  }, []);

  const handleAddTweet = () => {
   
    setShowModal(true); // Affichez la modal pour ajouter un tweet
  };

   // Fonction pour rafraîchir la liste des tweets
   const refreshTweets = async () => {
    const tweetsFromDb = await getTweets();
    setTweets(tweetsFromDb);
  };


  const handleCloseModal = () => {
    setShowModal(false);
    refreshTweets(); // Rafraîchir les tweets après la fermeture de la modal
  };

  return (
   <>  
   <TweetList listTweets={tweets}/>
    {/* Bouton "+" */}
    <TouchableOpacity style={styles.floatingButton} onPress={handleAddTweet}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      {/* Affichage conditionnel de la modal */}
      {showModal && <AddTweetModal onClose={handleCloseModal} />}
   </>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#1DA1F2', // Couleur bleue de Twitter
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Ombre pour Android
    shadowColor: '#000', // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default HomeScreen;

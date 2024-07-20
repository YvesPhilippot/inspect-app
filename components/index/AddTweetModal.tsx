import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { addTweet } from '@/database';

interface AddTweetModalProps {
  onClose: () => void;
}

const AddTweetModal: React.FC<AddTweetModalProps> = ({ onClose }) => {
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (userName && content) {
      await addTweet(
        userName,
        userName,
        'https://e7.pngegg.com/pngimages/639/508/png-clipart-brown-cat-illustration-bengal-cat-british-shorthair-ragdoll-turkish-angora-kitten-cat-tongue-cat-like-mammal-carnivoran-thumbnail.png',
        content,
        new Date().toISOString()
      );
      onClose(); // Fermer la modal après l'ajout
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Ajouter un Tweet</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={userName}
            onChangeText={setUserName}
          />                 
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Contenu du Tweet"
            value={content}
            onChangeText={setContent}
            multiline
          />
          <View style={styles.modalButton}>
            <Button title="Ajouter" onPress={handleSubmit} />
           <Button title="Annuler" onPress={onClose} color="red" />
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Légère transparence
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalButton:{
    flexDirection:'row'
  },
  button:{
    paddingRight : 5
  }
});

export default AddTweetModal;
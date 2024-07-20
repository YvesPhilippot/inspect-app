import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, TouchableOpacity } from 'react-native';

interface ReplyModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (reply: string) => void;
}

const ReplyModal: React.FC<ReplyModalProps> = ({ visible, onClose, onSubmit }) => {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = () => {
    if (replyText.trim()) {
      onSubmit(replyText);
      
      setReplyText('');
      onClose();
    }
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.replyInput}
            placeholder="Write a reply..."
            value={replyText}
            onChangeText={setReplyText}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Reply" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  replyInput: {
    height: 100,
    borderColor: '#e1e8ed',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReplyModal;
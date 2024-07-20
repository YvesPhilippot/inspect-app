import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEKRA - 2024 - Author : Yves Philippot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8'
  },
  text: {
    fontStyle: 'italic',
  },
});

export default Footer;
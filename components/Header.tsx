import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('@/assets/images/Dekra.png')}/>
      <Text style={styles.headerText}>Insp App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: '#006B52',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    paddingTop: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft : 20
  },
});

export default Header;
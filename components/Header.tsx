import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';


export type RootStackParamList = {
  profil: { id: number } | undefined;
};

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoAndTitleContainer}>
      <TouchableOpacity  onPress={() =>navigation.navigate('home' as never)}>
        <Image source={require('@/assets/images/Dekra.png')} style={styles.logo} />  
      </TouchableOpacity>
        <Text style={styles.headerText}>Insp App</Text>
      </View>
      <View style={styles.profile}>
      <TouchableOpacity  onPress={() =>navigation.navigate('profil' as never)}>
        <Ionicons name="settings-outline" size={24} color="white" />
      </TouchableOpacity>        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#006B52',
    justifyContent: 'space-between',
    height:100
  },
  logoAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  profile: {
    position: 'absolute',
    right: 10,
    bottom : 25
  },
});

export default Header;
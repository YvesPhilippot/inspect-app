import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const InspectionScreen : React.FC = () => {
    const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Inspection</Text>
      <View style={styles.button}>
      <Button
              onPress={() =>navigation.navigate('home')}
              title="Go Back"
              color="#0F508A"
          />
      </View>
      <View style={styles.button}>
      <Button
              onPress={() =>navigation.navigate('signature')}
              title="Sign"
              color="#0F508A"
          />
      </View>
      
    </View>    
    </>    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection : 'column',
    borderWidth: 1,
    borderColor : '#CCCCCC',
    padding: 10,
    margin:10,

  },
  text: {
    fontSize: 24,
    padding:15
  },
  button:{
    borderRadius : 3,
    paddingTop: 6,
    paddingRight:12,
    paddingBottom:6,
    paddingLeft:12
  },
});

export default InspectionScreen;
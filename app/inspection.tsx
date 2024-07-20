import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const InspectionScreen : React.FC = () => {
    const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>Inspection</Text>
     
    </View>
    <Button
              onPress={() =>navigation.navigate('home')}
              title="Go Back"
              color="#0F508A"
          />
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default InspectionScreen;
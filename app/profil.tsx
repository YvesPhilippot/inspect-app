import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getInspector, Stakeholder } from '@/database';


export default function ProfilScreen() {

  const [inspector, setInspector] = useState<Stakeholder | null>(null);

  
   const refreshInspector = async () => {
    const retrievedInspector = await getInspector();
    setInspector(retrievedInspector);
  };

  useEffect(() => {
   
    refreshInspector();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{inspector?.FirstName}</Text>
      <Text style={styles.label}>{inspector?.LastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection : 'row',
    borderWidth: 1,
    borderColor : '#CCCCCC',
    padding: 10,
    margin:10
  },
  label :{
    padding:5
  }
});

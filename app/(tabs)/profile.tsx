import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getInspector } from '@/database';


export default function Profile() {

  const [inspector, setInspector] = useState<any[]>([]);

  
   // Fonction pour rafraîchir la liste des tweets
   const refreshInspector = async () => {
    const vehicleFromDb = await getInspector();
    setInspector(vehicleFromDb);
  };

  useEffect(() => {
   
    refreshInspector();
  }, []);
  return (
    <View style={styles.container}>
      <Text>{inspector[0]?.FirstName}</Text>
      <Text>{inspector[0]?.LastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});

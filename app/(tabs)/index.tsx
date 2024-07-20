
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getVehicles } from '@/database';

const HomeScreen: React.FC = () => {


  const [vehicles, setVehicles] = useState<any[]>([]);

   // Fonction pour rafraîchir la liste des tweets
   const refreshVehicles = async () => {
    const vehicleFromDb = await getVehicles();
    setVehicles(vehicleFromDb);
  };  
  useEffect(() => {
   
    refreshVehicles();
  }, []);


  return (
   <>  
      
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

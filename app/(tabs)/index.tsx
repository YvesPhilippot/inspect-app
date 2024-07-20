
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getVehicles, getVehicleByVin, Vehicle } from '@/database';

const HomeScreen: React.FC = () => {

  const [text, onChangeText] = React.useState('');  
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);


  const getVehiclesByVin = async (vin : string) => {

    const infoVehicle = await getVehicleByVin(vin); 
    setVehicle(infoVehicle);
  }

  return (
   <>
    <View style={styles.container}>  
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Please type a VIN'
      />
      <View style={styles.button}>
        <Button 
        onPress={() => getVehiclesByVin(text)}    
        title="Search"
        color="#0F508A"     
        
      />
      </View>
      
   </View>
   {
    vehicle ?
      <View style={styles.vehicle}>
  
        <Text style={styles.vehicleInfo}>Immatriculation :</Text>
        <Text style={styles.vehicleInfo}>{vehicle?.RegistrationNumber}</Text>
        <Text style={styles.vehicleInfo}>Odometre :</Text>
        <Text style={styles.vehicleInfo}>{vehicle?.OdometerValue} KM</Text>
     
    </View>
    :<></>
    }



 

  
   
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
  vehicle: {
    flexDirection : 'row',
    borderWidth: 1,
    borderColor : '#CCCCCC',
    padding: 10,
    margin:10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vehicleInfo : {
    padding:10,
    width : '50%'

  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    paddingTop: 13,
    paddingRight:15,
    paddingBottom:14,
    paddingLeft:15,
    rowGap:10,
    borderRadius : 3,
    borderColor : '#CCCCCC'
  },
  button:{
   
    padding: 10,
  }
});

export default HomeScreen;

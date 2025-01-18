import ExplodedViewSvg from '@/components/ExplodedViewSvg';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
const DefectsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Defects</Text>
        <SafeAreaView style={styles.containerVehicle}>
          <ExplodedViewSvg />
        </SafeAreaView>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate('home')}
            title="Go Back"
            color="#0F508A"
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate('signature')}
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
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    margin: 10,

  },
  containerVehicle: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    padding: 15
  },
  button: {
    borderRadius: 3,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12
  },
});

export default DefectsScreen;
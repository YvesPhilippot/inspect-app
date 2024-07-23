import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import { initializeDatabase } from '@/database';
import Footer from '@/components/Footer';

// Importez vos composants d'écran ici
import HomeScreen from './home';
import InspectionScreen from './inspection';
import SignatureScreen from './signature';
import ProfilScreen from './profil';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      initializeDatabase();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Header />
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="inspection" component={InspectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signature" component={SignatureScreen} options={{ headerShown: false }} />
        <Stack.Screen name="profil" component={ProfilScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Footer />
    </ThemeProvider>
  );
}

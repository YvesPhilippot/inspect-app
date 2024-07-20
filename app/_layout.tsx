import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import { initializeDatabase } from '@/database';
import { Colors } from '@/constants/Colors';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Footer from '@/components/Footer';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
      <Stack initialRouteName='home'>
        <Stack.Screen name="home" options={{ headerShown: false }}/>
        <Stack.Screen name="inspection" options={{ headerShown: false }}/>
        <Stack.Screen name="signature" options={{ headerShown: false }}/>
        <Stack.Screen name="profil" options={{ headerShown: false }}/>
              
      </Stack>
      <Footer/>
    </ThemeProvider>
  );
}

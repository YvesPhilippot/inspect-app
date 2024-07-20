import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import { initializeDatabase, getTweets, addTweet, deleteAll } from '@/database';

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

      const fetchTweets = async () => {
        const removeAllFirst = await deleteAll();
        const tweetsFromDb = await getTweets();
      if (tweetsFromDb.length === 0) {
        // Ajouter un tweet initial si aucun tweet n'est présent
        await addTweet(
          'Rhonin',          // Nom de l'utilisateur
          'El_Rhonin',          // Identifiant de l'utilisateur
          'https://e7.pngegg.com/pngimages/639/508/png-clipart-brown-cat-illustration-bengal-cat-british-shorthair-ragdoll-turkish-angora-kitten-cat-tongue-cat-like-mammal-carnivoran-thumbnail.png', // URL de l'image du profil
          'Ceci est le premier tweet !', // Contenu du tweet
          new Date().toISOString() // Timestamp du tweet
        );
      }};
  
      fetchTweets();         

    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Header />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

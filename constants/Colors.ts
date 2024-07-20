/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#006B52';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#006B52',
    tabIconDefault: '#006B52',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#006B52',
    tint: tintColorDark,
    icon: '#006B52',
    tabIconDefault: '#006B52',
    tabIconSelected: tintColorDark,
  },
  mainColor:{
    background: '#006B52',
    text: '#fff'
  }
};

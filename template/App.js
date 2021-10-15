import React from 'react';
import { 
  NavigationContainer,
  DarkTheme as DarkThemeNavigation
 } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
import { 
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper
} from 'react-native-paper'

const App = () => {
  DarkThemePaper.colors.primary = '#079C7C'
  DarkThemePaper.colors.accent = '#079C7C'
  DarkThemePaper.colors.text = '#F7F7F8'
  DarkThemePaper.colors.surface = '#172431'
  DarkThemePaper.colors.background = '#172431'
  DarkThemePaper.dark

  DarkThemeNavigation.colors.background = '#172431'
  DarkThemeNavigation.colors.card = '#079C7C'
  
  return (
    <PaperProvider theme={DarkThemePaper}>
      <NavigationContainer theme={DarkThemeNavigation} >
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
 
export default App;
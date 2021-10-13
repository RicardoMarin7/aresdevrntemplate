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
  return (
    <PaperProvider theme={DarkThemePaper}>
      <NavigationContainer theme={DarkThemeNavigation} >
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
 
export default App;
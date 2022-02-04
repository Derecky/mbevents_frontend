import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Splash } from '@screens/Splash';
import theme from './theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        <ScrollView>
          <Splash />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

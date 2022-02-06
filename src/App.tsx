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
import { Home } from '@screens/Home';
import theme from './theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '@hooks/auth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>

  );
};

export default App;

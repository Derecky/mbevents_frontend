import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import { AuthProvider } from '@hooks/auth';
import { Routes } from './src/routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>

  );
};

export default App;

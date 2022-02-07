import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { EventDetails } from '@screens/EventDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='event' component={EventDetails} />
    </Navigator>
  )
}
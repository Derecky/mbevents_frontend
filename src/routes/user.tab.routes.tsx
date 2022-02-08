import React from 'react';
import { Platform, PlatformColor } from 'react-native'
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';

import { BottomMenu } from '@components/BottomMenu';
import { CartStackRoutes, UserStackRoutes } from './user.stack.routes';
import { Cart } from '@screens/Cart';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.BRAND_PRIMARY_DARK,
        tabBarInactiveTintColor: COLORS.GRAY_300,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        },
      }}
      initialRouteName='eventos'
    >
      <Screen
        name="ingressos"
        component={CartStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Ingressos" color={color} />
          )
        }}
      />
      <Screen
        name="eventos"
        component={UserStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Eventos" color={color} />
          )
        }}
      />
      <Screen
        name="carrinho"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Carrinho" color={color} notifications='0' />
          )
        }}
      />

    </Navigator>
  )
}
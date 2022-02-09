import React from 'react';
import { Platform, PlatformColor } from 'react-native'
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { BottomMenu } from '@components/BottomMenu';
import { CartStackRoutes, UserStackRoutes } from './user.stack.routes';

import { useCart } from '@hooks/cart';
import { Tickets } from '@screens/Tickets';

const { Navigator, Screen } = createBottomTabNavigator();


export function UserTabRoutes() {
  const { COLORS } = useTheme();
  const { cart } = useCart();

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
        component={Tickets}
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
        component={CartStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Carrinho" color={color} notifications={String(cart.length)} />
          )
        }}
      />

    </Navigator>
  )
}
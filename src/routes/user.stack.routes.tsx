import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { EventDetails } from '@screens/EventDetails';
import { Cart } from '@screens/Cart';
import { CreditCardPayment } from '@screens/CreditCardPayment';
import { PixPayment } from '@screens/PixPayment';
import { Success } from '@screens/Success';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='event' component={EventDetails} />
      <Screen name='cart' component={CartStackRoutes} />
    </Navigator>
  )
}

export function CartStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='cart' component={Cart} />
      <Screen name='cc_payment' component={CreditCardPayment} />
      <Screen name='pix_payment' component={PixPayment} />
      <Screen name='success' component={Success} />
      <Screen name='home_Stack' component={UserStackRoutes} />
    </Navigator>
  )

}
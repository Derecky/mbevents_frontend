import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserTabRoutes } from './user.tab.routes';
import { useAuth } from '@hooks/auth';
import { SignIn } from '@screens/SignIn';

export function Routes() {
  const { authorized } = useAuth();

  return (
    <>
      {
        authorized ? (
          <NavigationContainer>
            <UserTabRoutes />
          </NavigationContainer >
        ) : (
          <SignIn />
        )
      }
    </>
  );
}
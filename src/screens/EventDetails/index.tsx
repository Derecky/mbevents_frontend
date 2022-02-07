import React from 'react';

import {
  Container
} from './styles';

import { EventNavigationProps } from '@src/@types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native'


export function EventDetails() {
  const route = useRoute()
  const { id } = route.params as EventNavigationProps;
  const navigation = useNavigation();

  return (
    <Container>

    </Container>
  );
}
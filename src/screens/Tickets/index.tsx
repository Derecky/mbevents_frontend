import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import React from 'react';

import {
  Container
} from './styles';

export function Tickets() {
  return (
    <Container>
      <Header title='Ingressos' noBack />
      <TitlePage title='Meus ingressos' />

    </Container>
  );
}
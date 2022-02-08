import React from 'react';

import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import { Button } from '@components/Button';

import {
  Container,
  Content,
  Information,
} from './styles';

export function PixPayment() {
  return (
    <Container>
      <Header title='Carrinho' />
      <TitlePage title='Pagamento PIX' />

      <Content>
        <Information>Leia o QRCode abaixo para concluir o pagamento</Information>


        <Button
          title='Já fiz o pagamento'
          type='secondary'
          onPress={() => { }}
        />
      </Content>

    </Container>
  );
}
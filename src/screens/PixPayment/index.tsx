import React from 'react';

import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import { Button } from '@components/Button';
import QRCode from 'react-native-qrcode-svg';


import {
  Container,
  Content,
  Information,
  QRContent,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { useCart } from '@hooks/cart';

export function PixPayment() {
  const { cart } = useCart();
  let logoFromFile = require('@assets/qrcodelogo.png');

  const navigation = useNavigation();
  return (
    <Container>
      <Header title='Carrinho' />
      <TitlePage title='Pagamento PIX' />

      <Content>
        <Information>Leia o QRCode abaixo para concluir o pagamento</Information>
        <QRContent>
          <QRCode
            value={JSON.stringify(cart)}
            size={200}
            logo={logoFromFile}
          />
        </QRContent>

        <Button
          title='Já fiz o pagamento'
          type='secondary'
          onPress={() => { navigation.navigate('success') }}
        />
      </Content>

    </Container>
  );
}
import React from 'react';
import { TitlePage } from '@components/TitlePage';
import { Header } from '@components/Header';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImageSuccess,
  Content
} from './styles';

import SuccessPng from '@assets/success.png';
import { Button } from '@components/Button';
import { useCart } from '@hooks/cart';

export function Success() {

  const navigation = useNavigation();
  const { clearCart } = useCart();

  function handleNavigate() {
    clearCart();
    while (navigation.canGoBack()) {
      navigation.goBack();
    }
    navigation.navigate('home')
  }

  return (
    <Container>
      <Header title='Carrinho' noBack />
      <TitlePage title='Pagamento confirmado!' />
      <Content>
        <ImageSuccess source={SuccessPng} />


        <Button
          title='Voltar para menu principal'
          onPress={() => handleNavigate()}
        />
      </Content>

    </Container>
  );
}
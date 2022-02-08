import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import {
  Container,
  Content,
  CreditCardInfoContainer,
  Name,
  Validate,
  CardNumber,
  SecurityCode,

} from './styles';

import CreditCardSvg from '@assets/images/svgs/CreditCard.svg'
import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { TotalPrice } from '@components/TotalPrice';

export function CreditCardPayment() {
  const [name, setName] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [validate, setValidate] = useState('')
  const [securytiCode, setSecurityCode] = useState('');

  function cardNumberAdjuste(cardNumber: string) {
    if (cardNumber.length !== 16) {
      const newFormat = cardNumber
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title='Carrinho' />
        <TitlePage title="Pagamento com cartão" />
        <CreditCardInfoContainer>
          <CreditCardSvg />

          <Name>{name}</Name>
          <Validate>{validate}</Validate>
          <CardNumber>{`0000\n0000\n0000\n0000`}</CardNumber>
          <SecurityCode>{securytiCode}</SecurityCode>
        </CreditCardInfoContainer>

        <Content>
          <Input
            value={name}
            onChangeText={setName}
            placeholder='Nome conforme cartão'
            type='secondary'
            autoCapitalize='none'
          />
          <Input
            placeholder='Número do cartão'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
            maxLength={16}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Input
              value={validate}
              onChangeText={setValidate}
              placeholder='Validade'
              type='secondary'
              autoCorrect={false}
              autoCapitalize='none'
              maxLength={4}
            />
            <Input
              value={securytiCode}
              onChangeText={setSecurityCode}
              placeholder='CV'
              type='secondary'
              autoCorrect={false}
              autoCapitalize='none'
              maxLength={3}
            />

          </View>
          <Input
            placeholder='Fazer Select'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
          />

          <TotalPrice
            price="1,99"
          />

          <Button
            type='secondary'
            title='Confirmar pagamento'
            onPress={() => { }}
          />

        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
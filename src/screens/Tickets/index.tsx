import { TicketCard } from '@components/TicketCard';
import { SelectComponent } from '@components/SelectComponent';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from '../Home/styles';

import {
  Container,
  Content,
  BackgroundHeader,
  Title,
  TitlePage,
  TotalContainer,
  TotalText,
  TotalPrice
} from './styles';
import { Button } from '@components/Button';

const MOCK_PAYMENTS_FORMS = ['Cartão de crédito', 'Pix'];

export function Tickets() {
  const [tickets, setTickets] = useState(['', '', '']);

  return (
    <Container>
      <BackgroundHeader>
        <View style={{ width: 1 }} />
        <Title>Carrinho</Title>
        <View style={{ width: 1 }} />
      </BackgroundHeader>

      <TitlePage>Resumo de compra</TitlePage>
      <Divider />
      <Content>
        <View style={{ marginBottom: 32 }}>

          {tickets.map((ticket, index) => <TicketCard key={index} />)}
        </View>

        <SelectComponent
          title='Formas de pagamento'
          itemsTitle={MOCK_PAYMENTS_FORMS}
        />

        <TotalContainer>
          <TotalText>Total:</TotalText>
          <TotalPrice>R$ 199,90</TotalPrice>
        </TotalContainer>

        <Button
          title='Adicionar ao carrinho'
          type='secondary'
          onPress={() => { }}
        />
      </Content>

    </Container >
  );
}
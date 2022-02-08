import React, { useState } from 'react';
import { TicketCard } from '@components/TicketCard';
import { SelectComponent } from '@components/SelectComponent';
import { View } from 'react-native';

import {
  Container,
  Content,
} from './styles';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import { TotalPrice } from '@components/TotalPrice';

const MOCK_PAYMENTS_FORMS = ['Cartão de crédito', 'Pix'];

export function Cart() {
  const navigation = useNavigation()
  const [selected, setSelected] = useState('cc_payment');

  const [tickets, setTickets] = useState(['', '', '']);

  function handleAccept() {
    if (selected === 'cc_payment') {
      navigation.navigate("cc_payment");
    } else {
      navigation.navigate("pix_payment");
    }
  }

  return (
    <Container>
      <Header title="Carrinho" />

      <TitlePage title='Resumo de compra' />
      <Content>
        <View style={{ marginBottom: 32 }}>

          {tickets.map((ticket, index) => <TicketCard key={index} />)}
        </View>

        <SelectComponent
          title='Formas de pagamento'
          itemsTitle={MOCK_PAYMENTS_FORMS}
          chooseOption={setSelected}
        />

        <TotalPrice
          price="199,90"
        />

        <Button
          title='Continuar pagamento'
          type='secondary'
          onPress={() => handleAccept()}
        />
      </Content>

    </Container >
  );
}
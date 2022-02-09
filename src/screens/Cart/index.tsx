import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
} from './styles';
import { TicketCard } from '@components/TicketCard';
import { SelectComponent } from '@components/SelectComponent';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { TitlePage } from '@components/TitlePage';
import { TotalPrice } from '@components/TotalPrice';
import { useCart } from '@hooks/cart';

const MOCK_PAYMENTS_FORMS = ['Cartão de crédito', 'Pix'];

export function Cart() {
  const navigation = useNavigation()
  const { cart, totalPrice } = useCart();
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

          {cart.map((event, index) => (
            <TicketCard
              key={index}
              data={event}
            />
          ))}
        </View>

        <SelectComponent
          title='Formas de pagamento'
          itemsTitle={MOCK_PAYMENTS_FORMS}
          chooseOption={setSelected}
        />

        <TotalPrice
          price={totalPrice}
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
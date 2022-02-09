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
import { Text } from 'react-native';

const MOCK_PAYMENTS_FORMS = ['Cartão de crédito', 'Pix'];

export function Cart() {
  const navigation = useNavigation()
  const { cart, totalPrice, removeToCart } = useCart();
  const [selected, setSelected] = useState('cc_payment');

  function handleAccept() {
    if (selected === 'cc_payment') {
      navigation.navigate("cc_payment");
    } else {
      navigation.navigate("pix_payment");
    }
  }

  return (
    <Container>
      <Header title="Carrinho" noBack />

      <TitlePage title='Resumo de compra' />
      <Content>
        <View style={{ marginBottom: 32 }}>

          {cart.length > 0
            ? cart.map((event, index) => (
              <TicketCard
                key={index}
                data={event}
                handleDelete={(() => removeToCart(event))}
              />
            ))

            : <Text style={{ color: 'black' }}>Não tem nada no carrinho!</Text>
          }
        </View>

        {cart.length > 0 &&
          <>
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
          </>
        }
      </Content>

    </Container >
  );
}
import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  EmptyCartInfo
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
  const { cart, totalPrice, removeToCart } = useCart();
  const [selected, setSelected] = useState('Cartão de crédito');

  function handleAccept() {
    if (selected === 'Cartão de crédito') {
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

            : <EmptyCartInfo>Não tem nada no seu carrinho!</EmptyCartInfo>
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
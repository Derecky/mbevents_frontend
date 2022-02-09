import React, { useEffect, useState } from 'react';

import {
  Container,
  Content,
  EventImage,
  EventImageContainer,
  Title,
  ContentArea,
  TotalContainer,
  TotalText,
  TotalPrice,
  IconContainer
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native'
import { InfoEventIcons } from '@components/InfoEventIcons';
import { Tabs } from '@components/Tabs';

import LocationSvg from '@assets/images/svgs/location.svg';
import TicketSvg from '@assets/images/svgs/ticket.svg';
import ClockSvg from '@assets/images/svgs/clock.svg';
import { SelectComponent } from '@components/SelectComponent';
import { Button } from '@components/Button';
import ChevronLeftSvg from '@assets/images/svgs/chevron_left.svg';
import { Event } from '../../_MOCK_/events';
import { useCart } from '@hooks/cart';

export function EventDetails() {
  const { addToCart } = useCart();
  const route = useRoute()
  const event = route.params as Event;
  const navigation = useNavigation();

  const [sector, setSector] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState<number>(event.sect_price[0].price);

  const sectors = event.sect_price.map((item) => item.sect);
  const about_discount = [
    { label: 'Sobre', info: event.about },
    { label: 'Descontos', info: event.abount_discounts },
  ]

  function handleAddToCart() {
    const payload = {
      event,
      price,
      discount,
      sector
    }

    addToCart(payload);
    navigation.navigate('home');
  }


  function calculateTotal() {
    const searchSect = event.sect_price.filter((item) => item.sect === sector);
    if (discount === 'Meia entrada') {
      const newPrice = searchSect[0].price / 2;
      return newPrice;
    }
    if (discount === 'Inteira') {
      return searchSect[0].price;
    }

    return 0;
  }

  useEffect(() => {
    //inicialize states
    setSector(event.sect_price[0].sect);
    setDiscount(event.discount[0]);
  }, [])

  useEffect(() => {
    const newPrice = calculateTotal();
    setPrice(newPrice);
  }, [discount, sector])

  return (
    <Container>
      <Content>
        <EventImageContainer>
          <EventImage source={{
            uri: event.image
          }} />
          <IconContainer
            style={{ width: 40 }}
            onPress={navigation.goBack}
          >
            <ChevronLeftSvg />
          </IconContainer>
        </EventImageContainer>
        <ContentArea>
          <Title>{event.name}</Title>
          <InfoEventIcons
            title={event.location}
            info={`${event.city}/${event.uf}`}
            Icon={LocationSvg}
          />
          {/*<InfoEventIcons
            title={`Ingressos entre R$70,00 e R$310,00`}
            info='Em ate 3x sem juros'
            Icon={TicketSvg}
          />*/}
          <InfoEventIcons
            title={`${event.day} de ${event.mounth} de ${event.year}`}
            info={`Às ${event.hour}hs`}
            Icon={ClockSvg}
          />

          <Tabs texts={about_discount} />

          {event.sect_price &&
            <SelectComponent
              itemsTitle={sectors}
              title='Setores'
              chooseOption={setSector}
            />
          }

          {event.discount &&
            <SelectComponent
              itemsTitle={event.discount}
              title='Descontos'
              chooseOption={setDiscount}
            />
          }
          <TotalContainer>
            <TotalText>Total:</TotalText>
            <TotalPrice>R$ {price}</TotalPrice>
          </TotalContainer>

          <Button
            title='Adicionar ao carrinho'
            type='secondary'
            onPress={handleAddToCart}
          />
        </ContentArea>
      </Content>
    </Container>
  );
}
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

const texts = [
  { label: 'Sobre', info: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Viva Forevis aptent taciti sociosqu ad litora torquent.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Delegadis gente finis, bibendum egestas augue arcu ut est.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl." },
  { label: 'Desconto', info: "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Pra lá , depois divoltis porris, paradis." },
];

export function EventDetails() {
  const route = useRoute()
  const event = route.params as Event;
  const navigation = useNavigation();

  const [sector, setSector] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState<number>(event.sect_price[0].price);

  const sectors = event.sect_price.map((item) => item.sect);

  function handleAddToCart() {

  }


  function calculateTotal() {
    const searchSect = event.sect_price.find((item) => item.sect === sector);
    if (discount === 'Meia entrada' && searchSect !== undefined) {
      const newPrice = searchSect.price / 2;
      return newPrice;
    }
    if (discount === 'Inteira' && searchSect !== undefined) {
      return searchSect.price;
    }
    return 0;
  }

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
          <InfoEventIcons
            title={`Ingressos entre R$70,00 e R$310,00`}
            info='Em ate 3x sem juros'
            Icon={TicketSvg}
          />
          <InfoEventIcons
            title={`${event.day} de ${event.mounth} de ${event.year}`}
            info={`Às ${event.hour}hs`}
            Icon={ClockSvg}
          />

          <Tabs texts={texts} />
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
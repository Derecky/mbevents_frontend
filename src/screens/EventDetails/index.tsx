import React from 'react';

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
} from './styles';

import { EventNavigationProps } from '@src/@types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native'
import { InfoEventIcons } from '@components/InfoEventIcons';
import { Tabs } from '@components/Tabs';

import LocationSvg from '@assets/images/svgs/location.svg';
import TicketSvg from '@assets/images/svgs/ticket.svg';
import ClockSvg from '@assets/images/svgs/clock.svg';
import { SelectComponent } from '@components/SelectComponent';
import { Button } from '@components/Button';

const texts = [
  { label: 'Sobre', info: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Viva Forevis aptent taciti sociosqu ad litora torquent.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Delegadis gente finis, bibendum egestas augue arcu ut est.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl." },
  { label: 'Desconto', info: "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Pra lá , depois divoltis porris, paradis." },
];

const MOCKS_ITEMS_SETORES = [
  'Lateral esquerda',
  'Lateral direita',
  'Piso superior',
  'Piso inferior',
  'Fundos'
]
const MOCKS_ITEMS_DESCONTOS = [
  'Inteira',
  'Meia entrada',

]


export function EventDetails() {
  const route = useRoute()
  const { id } = route.params as EventNavigationProps;
  const navigation = useNavigation();

  function handleAddToCart() {


  }

  return (
    <Container>
      <Content>
        <EventImageContainer>
          <EventImage source={{
            uri: 'https://media.starlightcms.io/workspaces/pague-menos/portal-sempre-bem/large/istock-1227545308-ya8rnoqcq7.jpeg'
          }} />
        </EventImageContainer>
        <ContentArea>
          <Title>Festa na Arena x</Title>
          <InfoEventIcons
            title="Arena São Paulo"
            info='São Paulo/SP'
            Icon={LocationSvg}
          />
          <InfoEventIcons
            title="Ingressos entre R$70,00 e R$310,00"
            info='Em ate 3x sem juros'
            Icon={TicketSvg}
          />
          <InfoEventIcons
            title="25 de outubro de 2022"
            info='Às 22:00h'
            Icon={ClockSvg}
          />

          <Tabs texts={texts} />

          <SelectComponent
            itemsTitle={MOCKS_ITEMS_SETORES}
            title='Setores'
          />

          <SelectComponent
            itemsTitle={MOCKS_ITEMS_DESCONTOS}
            title='Descontos'
          />

          <TotalContainer>
            <TotalText>Total:</TotalText>
            <TotalPrice>R$ 199,90</TotalPrice>
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
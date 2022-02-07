import React from 'react';

import {
  Container,
  InfoContainer,
  Title,
  Subtitle,
  InfoDateContainer,
  Date,
  Hour,
  Discount,
  InfoContent,
  DeleteContainer,
} from './styles';

import TicketCardSvg from '@assets/images/svgs/ticketCard.svg';
import DeleteSvg from '@assets/images/svgs/delete.svg';
import { heightScale, widthScale } from '@utils/dimensions';
import { View } from 'react-native';

export function TicketCard() {
  const width = widthScale(87.2);
  const height = heightScale(14.53);

  return (
    <Container>
      <View>
        <TicketCardSvg width={width} />

        <InfoContainer>
          <InfoContent>
            <Title>Festa na Arena</Title>
            <Subtitle>Ingresso individual</Subtitle>
            <InfoDateContainer>
              <Date>25/10/2022</Date>
              <Hour>22:00</Hour>
            </InfoDateContainer>

            <Discount>MEIA ENTRADA</Discount>
          </InfoContent>
          <DeleteContainer>
            <DeleteSvg />
          </DeleteContainer>
        </InfoContainer>
      </View>
    </Container>
  );
}
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
import { Event } from '@src/_MOCK_/events';
import { mounthToNumber } from '@utils/mounthConvert';

type EventProps = {
  event: Event,
  discount: string,
  price: number,
  sector: string
}

type TicketProps = {
  data: EventProps,
  handleDelete?: () => void;
}

export function TicketCard({ data }: TicketProps) {
  const width = widthScale(87.2);
  const height = heightScale(14.53);

  return (
    <Container>
      <View>
        <TicketCardSvg width={width} />

        <InfoContainer>
          <InfoContent>
            <Title>{data.event.name}</Title>
            <Subtitle>{data.sector}</Subtitle>
            <InfoDateContainer>
              <Date>{`${data.event.day}/${mounthToNumber(data.event.mounth)}/${data.event.year}`}</Date>
              <Hour>{data.event.hour}hs</Hour>
            </InfoDateContainer>

            <Discount>{data.discount}</Discount>
          </InfoContent>
          <DeleteContainer>
            <DeleteSvg />
          </DeleteContainer>
        </InfoContainer>
      </View>
    </Container>
  );
}
import { mounthConvert } from '@utils/mounthConvert';
import { Event } from '@src/_MOCK_/events';
import React from 'react';

import {
  Container,
  Content,
  EventImg,
  InfoContainer,
  Title,
  Description,
  DateContainer,
  DateDay,
  DateMounth
} from './styles';

interface CardEventProps {
  data: Event,
  onPress: () => void
}

export function CardEvent({ data, onPress }: CardEventProps) {
  return (
    <Container onPress={onPress}>
      <Content>
        <EventImg source={{
          uri: data.image
        }} />
        <InfoContainer>
          <Title>{data.name}</Title>
          <Description>{data.description}</Description>
        </InfoContainer>

        <DateContainer>
          <DateDay>{data.day}</DateDay>
          <DateMounth>{mounthConvert(data.mounth)}</DateMounth>
        </DateContainer>
      </Content>

    </Container>
  );
}
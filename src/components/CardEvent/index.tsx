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
  data: any
  onPress: () => void
}

export function CardEvent({ data, onPress }: CardEventProps) {
  return (
    <Container onPress={onPress}>
      <Content>
        <EventImg source={{
          uri: 'https://media.starlightcms.io/workspaces/pague-menos/portal-sempre-bem/large/istock-1227545308-ya8rnoqcq7.jpeg'
        }} />
        <InfoContainer>
          <Title>Festa na arena X</Title>
          <Description>A arena hoje contará com atrações fantásticas, traga sua família para prestigiar o espetáculo</Description>
        </InfoContainer>

        <DateContainer>
          <DateDay>28</DateDay>
          <DateMounth>OUT</DateMounth>
        </DateContainer>
      </Content>

    </Container>
  );
}
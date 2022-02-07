import React from 'react';

import {
  Container,
  Content,
  Title,
  Info,
} from './styles';

type Props = {
  Icon: any
  title: string,
  info: string
}

export function InfoEventIcons({ Icon, title, info }: Props) {
  return (
    <Container>
      <Icon width={32} />
      <Content>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </Content>
    </Container>
  );
}
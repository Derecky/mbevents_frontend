import React from 'react';

import {
  Container,
  Radius,
  SelectedRadius,
  Title
} from './styles';

type Props = {
  selected: boolean,
  title: string,
  onPress?: () => void
}

export function Item({ selected, title, onPress }: Props) {
  return (
    <Container selected={selected} onPress={onPress}>
      <Radius>
        <SelectedRadius selected={selected} />
      </Radius>
      <Title>{title}</Title>
    </Container>
  );
}
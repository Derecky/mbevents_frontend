import React from 'react';

import {
  Container,
  Radius,
  SelectedRadius,
  Title
} from './styles';

import DotSvg from '@assets/images/svgs/dot.svg';

type Props = {
  selected: boolean,
  title: string,
  onPress?: () => void
}

export function Item({ selected, title, onPress }: Props) {
  return (
    <Container selected={selected} onPress={onPress}>
      <Radius>
        {selected && <DotSvg />}
      </Radius>
      <Title>{title}</Title>
    </Container>
  );
}
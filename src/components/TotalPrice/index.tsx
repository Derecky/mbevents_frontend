import React from 'react';

import {
  TotalContainer,
  TotalText,
  Price,
} from './styles';

type Props = {
  price: number
}

export function TotalPrice({ price }: Props) {
  return (
    <TotalContainer>
      <TotalText>Total:</TotalText>
      <Price>R$ {price}</Price>
    </TotalContainer>
  );
}
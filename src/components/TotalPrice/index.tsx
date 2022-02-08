import React from 'react';

import {
  TotalContainer,
  TotalText,
  Price,
} from './styles';

type Props = {
  price: string
}

export function TotalPrice({ price = '0,00' }: Props) {
  return (
    <TotalContainer>
      <TotalText>Total:</TotalText>
      <Price>R$ {price}</Price>
    </TotalContainer>
  );
}
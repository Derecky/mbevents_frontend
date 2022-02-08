import React from 'react';

import {
  Title,
  Divider
} from './styles';

type Props = {
  title: string
}

export function TitlePage({ title }: Props) {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
    </>
  );
}
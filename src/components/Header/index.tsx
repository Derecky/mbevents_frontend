import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  BackgroundHeader,
  Title,
  IconContainer,
} from './styles';

import ChevronLeftSvg from '@assets/images/svgs/chevron_left.svg';

type Props = {
  title: string,
  noBack?: boolean
}

export function Header({ title, noBack = false }: Props) {
  const { goBack } = useNavigation();

  return (
    <BackgroundHeader>
      {!noBack ? <IconContainer
        style={{ width: 40 }}
        onPress={goBack}
      >
        <ChevronLeftSvg />
      </IconContainer>
        : <View style={{ width: 1 }} />}
      <Title>{title}</Title>
      <View style={{ width: 1 }} />
    </BackgroundHeader>
  );
}
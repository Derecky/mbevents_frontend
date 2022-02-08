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
  title: string
}

export function Header({ title }: Props) {
  const { goBack, canGoBack } = useNavigation();

  return (
    <BackgroundHeader>
      {canGoBack() ? <IconContainer
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
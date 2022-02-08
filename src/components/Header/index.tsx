import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  BackgroundHeader,
  Title,
} from './styles';

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <BackgroundHeader>
      <View style={{ width: 1 }} />
      <Title>{title}</Title>
      <View style={{ width: 1 }} />
    </BackgroundHeader>
  );
}
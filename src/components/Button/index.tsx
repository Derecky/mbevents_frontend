import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title,
  Load,
  TypeProps
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
  onPress: () => void
}

export function Button({
  title,
  onPress,
  type = "primary",
  isLoading = false,
}: Props) {
  return (
    <Container onPress={onPress} type={type} disabled={isLoading}>
      {isLoading ? <Load /> : < Title>{title}</Title>}
    </Container>
  );
}
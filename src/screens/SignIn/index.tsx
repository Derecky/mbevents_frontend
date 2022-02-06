import React, { ChangeEvent, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useAuth } from '@hooks/auth';

import brandPng from '@assets/brand-img.png';

import {
  BrandImg,
  Container,
  Content,
  Title,
  ForgotPasswordButton,
  ForgotPasswordLabel
} from './styles';

export function SignIn() {
  const { signIn, isLogging } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSignIn() {
    signIn(email, password);
  }


  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>

          <BrandImg source={brandPng} />

          <Title>Login</Title>
          <Input
            onChangeText={setEmail}
            value={email}
            placeholder='E-mail'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
          />

          <Input
            onChangeText={setPassword}
            value={password}
            placeholder='Senha'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
          />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title='Entrar'
            onPress={() => handleSignIn()}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
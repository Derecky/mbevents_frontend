import { CardEvent } from '@components/CardEvent';
import { Search } from '@components/Search';
import React from 'react';

import {
  Container,
  BackgroundHeader,
  Content,
  TitlePage,
  Divider,
  HeaderContainer,
  UserContainer,
  ImgContainer,
  NameContainer,
  Welcome,
  UserName,
  LogoutBtn,

} from './styles';

import Avatar from '@assets/images/svgs/avatar.svg';
import Logout from '@assets/images/svgs/logout.svg';

export function Home() {
  return (
    <Container>
      <BackgroundHeader>
        <HeaderContainer>
          <UserContainer>
            <ImgContainer>
              <Avatar width={32} />
            </ImgContainer>
            <NameContainer>
              <Welcome>Bem vindo(a)</Welcome>
              <UserName>Fulana da silva</UserName>
            </NameContainer>
          </UserContainer>

          <LogoutBtn>
            <Logout width={24} />
          </LogoutBtn>
        </HeaderContainer>
      </BackgroundHeader>

      <Search />

      <TitlePage>Eventos</TitlePage>
      <Divider />

      <Content>
        <CardEvent />
        <CardEvent />
        <CardEvent />
      </Content>

    </Container>
  );
}
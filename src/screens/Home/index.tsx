import React, { useState } from 'react';

import { CardEvent } from '@components/CardEvent';
import { Search } from '@components/Search';

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
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

interface onlyToFlatlist {
  id: string
}

import { MOCK_EVENTS, Event } from '../../_MOCK_/events';

export function Home() {

  const navigation = useNavigation();

  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);

  function handleOpen(event: Event) {
    navigation.navigate('event', event);
  }

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
        <FlatList
          data={events}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <CardEvent
              data={item}
              onPress={() => handleOpen(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 125,
            marginHorizontal: 24
          }}
        />
      </Content>

    </Container>
  );
}
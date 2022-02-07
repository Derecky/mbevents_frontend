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
import { FlatList } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

interface onlyToFlatlist {
  id: string
}

export function Home() {
  const navigation = useNavigation();

  const [events, setEvents] = useState<onlyToFlatlist[]>([
    { id: '1' },
    { id: '2' }
  ]);

  function handleOpen(id: string) {
    navigation.navigate('event', { id });
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardEvent
              data={item}
              onPress={() => handleOpen(item.id)}
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
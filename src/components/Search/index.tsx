import React, { useState } from 'react';

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  CloseContainer,
} from './styles';
import { Alert } from 'react-native';

import CloseSvg from '@assets/images/svgs/close.svg';
import SearchSvg from '@assets/images/svgs/search.svg';

export function Search() {
  const [searchText, setSearchText] = useState('');

  function handleSearch() {
    if (searchText) {
      Alert.alert('Success!!', `Busca: ${searchText}`);
      setSearchText('');
    }
  }

  function handleClear() {
    setSearchText('');
  }

  return (
    <Container>
      <SearchContainer>
        <Input
          placeholder='O que procura?'
          onChangeText={setSearchText}
          value={searchText}
          autoCorrect={false}
        />
        <CloseContainer onPress={handleClear}>
          <CloseSvg />
        </CloseContainer>

      </SearchContainer>
      <SearchButton
        activeOpacity={0.95}
        onPress={() => handleSearch()}
      >
        <SearchSvg width={24} />
      </SearchButton>
    </Container>
  );
}
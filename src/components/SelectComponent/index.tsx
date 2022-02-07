import React, { useState } from 'react';
import { Item } from './Item';

import {
  Container,
  Title,
  OptionsContainer,
} from './styles';

type Props = {
  title: string,
  itemsTitle: string[],
  chooseOption?: (selectedOption: string) => void
}

export function SelectComponent({ title, itemsTitle, chooseOption }: Props) {
  const [selected, setSelected] = useState(0);

  function handleChangeSelect(index: number) {
    setSelected(index);

    if (chooseOption) {
      const updatedSelect = itemsTitle[index];
      chooseOption(updatedSelect)
    }
  }

  return (
    <Container>
      <Title>{title}</Title>

      <OptionsContainer>
        {
          itemsTitle.map((item, index) => (
            <Item
              key={index}
              selected={selected === index}
              title={item}
              onPress={() => handleChangeSelect(index)}
            />
          ))
        }
      </OptionsContainer>

    </Container>
  );
}
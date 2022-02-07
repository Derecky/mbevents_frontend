import React, { useState } from 'react';
import { heightScale } from '@utils/dimensions';
import { View } from 'react-native';

import {
  Container,
  TabTitleContainer,
  TabLabel,
  TabInfoContainer,
  TabInfo,
} from './styles';
import { useTheme } from 'styled-components/native';

type Props = {
  texts: {
    label: string,
    info: string
  }[]
}

export function Tabs({ texts }: Props) {
  const { COLORS } = useTheme();

  const [selected, setSelected] = useState(0);

  function handleChangeSelect(index: number) {
    setSelected(index);
  }

  return (
    <Container>

      <TabTitleContainer>
        {texts.map((tabContent, index) =>
          <View key={index}>
            <TabLabel
              selected={selected === index}
              onPress={() => handleChangeSelect(index)}
            >
              {tabContent.label}
            </TabLabel>
            <View
              style={{
                borderBottomColor: selected === index ? COLORS.BRAND_PRIMARY_DARK : 'transparent',
                borderBottomWidth: 3,
                width: '50%',
                marginVertical: heightScale(0.225)
              }}
            />


          </View>
        )}
      </TabTitleContainer>
      <TabInfoContainer>
        <TabInfo >{texts[selected].info}</TabInfo>
      </TabInfoContainer>
    </Container>
  );
}
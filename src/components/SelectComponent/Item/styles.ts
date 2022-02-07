import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { heightScale, widthScale } from '@utils/dimensions';

type Props = {
  selected: boolean,
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  height: ${heightScale(6)}px;
  flex-direction: row;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 4px 0;

  align-items: center;
  
  ${({ theme }) =>
    css`
      background-color: ${theme.COLORS.WHITE};
    `
  }

  ${({ theme, selected }) => selected ?
    css`
      border: 1px solid ${theme.COLORS.BRAND_PRIMARY_DARK}

    `
    :
    css`
    border: 1px solid ${theme.COLORS.GRAY_200}
    `
  }
`;

export const Radius = styled.View`
  justify-content: center;
  align-items: center;
  width: ${widthScale(4)}px;
  height: ${widthScale(4)}px;
  border-radius: ${widthScale(100)}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
  margin-right: 12px;
  `;

export const SelectedRadius = styled.View<Props>`
  width: ${widthScale(2)}px;
  height: ${widthScale(2)}px;
  border-radius: ${widthScale(2)}px;

  ${({ theme, selected }) => selected && css`
      background-color: ${theme.COLORS.BRAND_PRIMARY_DARK};
    `
  }

`;

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_800} ;
  `}
`;
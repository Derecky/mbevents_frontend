import styled, { css } from 'styled-components/native';
import { heightScale } from '@utils/dimensions';

type SelectedProps = {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
 
  margin-top: 36px;
`;

export const TabTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TabLabel = styled.Text<SelectedProps>`
  margin-right: 20px;
  font-size: 14px;

  ${({ theme, selected }) => selected ?
    css`
      font-family: ${theme.FONTS.ROBOTO_BOLD};
      color: ${theme.COLORS.GRAY_900};
    `
    :
    css`
      font-family: ${theme.FONTS.ROBOTO_REGULAR};
      color: ${theme.COLORS.GRAY_500}
    `
  }

`;

export const TabInfoContainer = styled.View`
  margin: 12px 0;
`;

export const TabInfo = styled.Text`
  text-align: justify;
  font-size: 14px;
  padding-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_700}
  `}
`;




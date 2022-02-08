import styled, { css } from 'styled-components/native';

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 42px;
`;

export const TotalText = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900}
  `};
`;

export const Price = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900}
  `};
`;
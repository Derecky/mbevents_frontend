import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  margin: 10px 8px;

`;

export const Title = styled.Text`
  font-size: 14px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_800};
  `};
`;

export const Info = styled.Text`
  font-size: 10px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

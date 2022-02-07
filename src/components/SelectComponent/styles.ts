import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const OptionsContainer = styled.View`

`;

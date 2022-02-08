import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0px 24px;
  margin: 32px 0px;
`;

export const CreditCardInfoContainer = styled.View`
  position: relative;
  padding-left: 16px;
  align-self: center;
  margin-top: 24px;
`;

export const Name = styled.Text`
  position: absolute;
  left: 12%;
  bottom: 32%;
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Validate = styled.Text`
  position: absolute;
  right: 24%;
  top: 8px;

  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const CardNumber = styled.Text`
  position: absolute;

  top: 8px;
  right: 4%;
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.WHITE};
  `};

`;

export const SecurityCode = styled.Text`
  position: absolute;

  right: 7%;
  bottom: 32%;
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};

`;

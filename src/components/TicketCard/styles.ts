import styled, { css } from 'styled-components/native';
import { widthScale, heightScale } from '@utils/dimensions';

export const Container = styled.View`
  position: relative;
`;

export const InfoContainer = styled.View`
  position: absolute;
  width: ${widthScale(87.2)}px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;


export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 10px;
  margin: 4px 0;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const InfoDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContent = styled.View`
    width: ${widthScale(51.5)}px ;
    height: ${heightScale(14.53)}px;
    padding: 0 24px;
`;

export const Date = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Hour = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Discount = styled.Text`
  margin-top: 16px;

  font-size: 14px;

${({ theme }) => css`
  font-family: ${theme.FONTS.ROBOTO_REGULAR};
  color: ${theme.COLORS.GRAY_800};
`}
`;



export const DeleteContainer = styled.TouchableOpacity`
  width: ${widthScale(20.7)}px;
  height: ${widthScale(20.7)}px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;


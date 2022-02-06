import styled, { css } from 'styled-components/native';
import { heightScale, widthScale } from '@utils/dimensions';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  margin-top: 32px;

  height: ${heightScale(33)}px;
  width: 100%;

  position: relative;

`;

export const Content = styled.View.attrs({
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  flex: 1;
`;

export const EventImg = styled.Image.attrs({
  resizeMode: 'cover',
})`
  z-index: 1;
  height: ${heightScale(18)}px;
  border-radius: 24px;
`;

export const InfoContainer = styled.View.attrs(() => Platform.OS === 'ios' ?
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  } : {
    elevation: 1
  })`
  flex: 1;
  margin-top: -${heightScale(11)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  z-index: 0;
  
  justify-content: flex-end;

`;

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const Description = styled.Text`
  font-size: 10px;
  margin-top: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateContainer = styled.View.attrs(() => Platform.OS === 'ios' ?
  {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  } : {
    elevation: 2
  }
)`
  height: ${widthScale(9.6)}px;
  width: ${widthScale(11.2)}px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  position: absolute;
  top:  45%;
  left: 5%;

  z-index: 2;
  padding: 3px 9px;

  align-items: center;
  justify-content: center;
`;

export const DateDay = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_800};
  `}
`;
export const DateMounth = styled.Text`
  font-size: 10px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;
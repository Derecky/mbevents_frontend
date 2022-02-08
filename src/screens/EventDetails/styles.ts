import styled, { css } from 'styled-components/native';
import { heightScale, widthScale } from '@utils/dimensions';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY_DARK};
`;

export const Content = styled.ScrollView.attrs({
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  margin-top: 44px;
  background-color: #F7F7F7;
`;

export const EventImageContainer = styled.View`
  position: relative;
`;

export const EventImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: ${heightScale(38.4)}px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const ContentArea = styled.View`
  padding: 0 24px;
  padding-bottom: 48px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin: 24px 0px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${theme.COLORS.GRAY_900}
  `};
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 10%;
  left: 5%;

  width: ${widthScale(10)}px;
  height: ${widthScale(10)}px;

  border: 1px solid #FFFFFF24;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
  background-color: #00000075;
`;

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

export const TotalPrice = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.GRAY_900}
  `};
`;




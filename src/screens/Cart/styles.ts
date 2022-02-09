import styled, { css } from 'styled-components/native';
import { heightScale, widthScale } from '@utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 0px 32px;
  margin-top: 24px;
`;

export const EmptyCartInfo = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.GRAY_500}
  `}
`;





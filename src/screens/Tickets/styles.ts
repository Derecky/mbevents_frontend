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

export const BackgroundHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_1,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex-direction: row;
  height: ${heightScale(19)}px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const TitlePage = styled.Text`
  padding: 20px 32px;
  font-size: 20px;
  align-self: flex-start;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const Divider = styled.View.attrs({

  borderBottomColor: '#DCDCDC',
  borderBottomWidth: 1,

})`
  justify-self: center;
  align-self: center;
  width: ${widthScale(100) - 64}px;
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



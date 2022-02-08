import styled, { css } from 'styled-components/native';
import { heightScale } from '@utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_1,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  flex-direction: row;
  height: ${heightScale(17)}px;
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
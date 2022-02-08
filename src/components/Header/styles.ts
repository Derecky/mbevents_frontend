import styled, { css } from 'styled-components/native';
import { heightScale, widthScale } from '@utils/dimensions';
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
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  border: 1px solid #FFFFFF24;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: ${widthScale(10)}px;
  height: ${widthScale(10)}px;
`;
import { widthScale, heightScale } from '../../utils/dimensions';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_1,
  useAngle: true,
  angle: -45,
  angleCenter: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BRAND_SECONDARY};
  width: ${widthScale(100)}px;
  height: ${heightScale(100)}px;

  align-items: center;
  justify-content: center;
`;

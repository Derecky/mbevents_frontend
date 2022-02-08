import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'
import { heightScale, widthScale } from './../../utils/dimensions';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_400,

})) <Props>`
  flex: 1;
  min-height: ${heightScale(6.89)}px;
  max-height: ${heightScale(6.89)}px;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  
  ${({ theme, type }) => css`
    background-color: ${type === 'primary' ? 'transparent' : theme.COLORS.WHITE};
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    border: 1px solid ${type === 'primary' ? theme.COLORS.BRAND_PRIMARY_DARK : '#EEEEEE'};
    color: ${type === 'primary' ? theme.COLORS.GRAY_800 : theme.COLORS.GRAY_700};
  `}
`;
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'
import { heightScale, widthScale } from './../../utils/dimensions';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: type === 'primary' ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300,

})) <Props>`
  width: 100%;
  height: ${heightScale(6.89)}px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    border: 1px solid ${theme.COLORS.BRAND_PRIMARY_DARK};
    color: ${type === 'primary' ? theme.COLORS.GRAY_800 : theme.COLORS.GRAY_050};
  `}
`;
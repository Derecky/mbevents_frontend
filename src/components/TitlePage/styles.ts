import { widthScale } from '@utils/dimensions';
import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
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
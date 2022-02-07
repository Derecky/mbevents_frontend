import styled, { css } from 'styled-components/native';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  max-height: 56px;
  min-height: 56px;

  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.BRAND_PRIMARY_DARK : theme.COLORS.CHECK};
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.ROBOTO_BOLD};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``;
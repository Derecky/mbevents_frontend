import styled from 'styled-components/native';
import { heightScale } from '@utils/dimensions'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 22px;
  justify-content: space-between;
  height: ${heightScale(7)}px;

  margin-top: -${heightScale(7) / 2}px;
`;

export const CloseContainer = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const SearchContainer = styled.View`
  position: relative;
  flex: 1;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))
  `
  border: 1px solid #F0F0F0;
  background-color: #FFFFFF;
  border-radius: ${heightScale(2)}px;
  padding: 0 16px;
  flex: 1;
`;

export const SearchButton = styled.TouchableOpacity`
  height: ${heightScale(7)}px;
  width: ${heightScale(7)}px;
  margin-left: 8px;
  border-radius: ${heightScale(1.5)}px;
  
  background-color: ${({ theme }) => theme.COLORS.BRAND_PRIMARY_DARK};

  align-items: center;
  justify-content: center;

`;
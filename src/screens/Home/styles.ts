import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightScale, widthScale } from '@utils/dimensions';

export const Container = styled.View`
  flex: 1;
  background-color: #FAFAFA;
`;

export const BackgroundHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_1,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))`
  height: ${heightScale(19)}px;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 8px;
  margin-top: 24px;
  margin-bottom: 140px;
`;

export const Divider = styled.View.attrs({

  borderBottomColor: '#DCDCDC',
  borderBottomWidth: 1,

})`
  justify-self: center;
  align-self: center;
  width: ${widthScale(100) - 64}px;
`;

export const TitlePage = styled.Text`
  padding: 20px 32px;
  font-size: 20px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const HeaderContainer = styled.View`
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const ImgContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.35);
  height: ${widthScale(8.5)}px;
  width: ${widthScale(8.5)}px;

  justify-content: center;
  align-items: center;

  border-radius: ${widthScale(8.5)}px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameContainer = styled.View`
  margin-left: 10px;
`;

export const Welcome = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const UserName = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.ROBOTO_BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const LogoutBtn = styled.TouchableOpacity`
`;


import styled, { css } from 'styled-components/native';

type TitleProps = {
  color: string;
}

type NotificationProps = {
  noNotifications: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 18px;;
  
  ${({ theme, color }) => css`
    font-family: ${theme.FONTS.DM_SERIF_DISPLAY_REGULAR};
    color: ${color};
  `}
`;

export const Notification = styled.View<NotificationProps>`
  height: 20px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 8px;
  border-radius: 16px;

  ${({ noNotifications, theme }) => !noNotifications && css`
    background-color: ${theme.COLORS.CHECK_DARK};
  `};

  ${({ noNotifications }) => noNotifications && css`
    background-color: transparent;
  `};
`;

export const Quantity = styled.Text<NotificationProps>`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};    
    font-family: ${theme.FONTS.ROBOTO_REGULAR};
  `};
`;
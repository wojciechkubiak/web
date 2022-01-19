import styled from 'styled-components';

import { Theme } from '../../types/Themes';
import { Page } from '../../types/Pages';

interface IThemeSwitch {
  isDarkMode?: boolean;
  theme: Theme;
  page?: Page;
}

export const ThemeSwitchContainer = styled.div<IThemeSwitch>`
  position: fixed;
  z-index: 2000;
  left: 16px;
  top: 16px;
  width: 90px;
  padding: 10px 20px;
  border-radius: 12px;
  border: ${(props) =>
    props.page === Page.ABOUT || props.page === Page.HOME
      ? '2px solid transparent'
      : props.isDarkMode
      ? '2px solid #2a2a2a'
      : '2px solid white'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isDarkMode ? '#313131' : 'white'};
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset,
    rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media screen and (max-width: 1600px) {
    left: 8px;
    top: 8px;
    transform: scale(0.8);
  }

  @media screen and (max-width: 920px) {
    left: 48px;
    top: 8px;
  }
`;

export const ThemeOption = styled.div<IThemeSwitch>`
  background-color: ${(props) =>
    props.isDarkMode
      ? props.theme === Theme.DARK
        ? 'white'
        : '#313131'
      : props.theme === Theme.DARK
      ? 'white'
      : '#313131'};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    color: ${(props) =>
      props.isDarkMode
        ? props.theme === Theme.DARK
          ? '#313131'
          : 'white'
        : props.theme === Theme.DARK
        ? '#313131'
        : 'white'};
  }
`;

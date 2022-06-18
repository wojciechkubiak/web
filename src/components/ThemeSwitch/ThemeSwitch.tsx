import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import ThemeContext from '../../context/Style';
import PageContext from '../../context/Page';

import { Theme } from '../../types/Themes';
import {
  ThemeOption,
  ThemeSwitchContainer,
} from './ThemeSwitchStyle';

const ThemeSwitch = () => {
  const themeCtx = useContext(ThemeContext);
  const pageCtx = useContext(PageContext);

  const ICON_SIZE = 24;

  const isDarkMode = themeCtx.themeMode === Theme.DARK;

  return (
    <ThemeSwitchContainer
      page={pageCtx.currentPage}
      isDarkMode={isDarkMode}
    >
      <ThemeOption
        theme={Theme.LIGHT}
        isDarkMode={isDarkMode}
        onClick={() => themeCtx.setThemeMode(Theme.LIGHT)}
      >
        <FaSun size={ICON_SIZE} />
      </ThemeOption>
      <ThemeOption
        theme={Theme.DARK}
        isDarkMode={isDarkMode}
        onClick={() => themeCtx.setThemeMode(Theme.DARK)}
      >
        <FaMoon size={ICON_SIZE} />
      </ThemeOption>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;

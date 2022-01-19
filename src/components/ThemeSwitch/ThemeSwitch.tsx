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

  return (
    <ThemeSwitchContainer
      page={pageCtx.currentPage}
      isDarkMode={themeCtx.themeMode === Theme.DARK}
    >
      <ThemeOption
        theme={Theme.LIGHT}
        isDarkMode={themeCtx.themeMode === Theme.DARK}
        onClick={() => themeCtx.setThemeMode(Theme.LIGHT)}
      >
        <FaSun size={24} />
      </ThemeOption>
      <ThemeOption
        theme={Theme.DARK}
        isDarkMode={themeCtx.themeMode === Theme.DARK}
        onClick={() => themeCtx.setThemeMode(Theme.DARK)}
      >
        <FaMoon size={24} />
      </ThemeOption>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;

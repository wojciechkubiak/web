import { createContext } from "react";
import { Theme } from "../types/Themes";

const ThemeContext = createContext({
  themeMode: Theme.LIGHT,
  setThemeMode: (value: Theme) => {},
});

export default ThemeContext;

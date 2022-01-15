import { ReactNode, useContext, useEffect } from "react";
import {
  Background,
  ColorBackground,
  Container,
  Global,
  ThemeOption,
  ThemeSwitch,
} from "./LayoutStyle";
import TransformContext from "../../context/Transform";
import PageContext from "../../context/Page";
import ThemeContext from "../../context/Style";
import { Page } from "../../types/Pages";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme } from "../../types/Themes";
import Footer from "../Footer/Footer";

interface ISplitBackground {
  children: ReactNode;
}

//0-25-50
const SplitBackground = ({ children }: ISplitBackground) => {
  const transformCtx = useContext(TransformContext);
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      themeCtx.setThemeMode(
        mode === Theme.DARK.toString() ? Theme.DARK : Theme.LIGHT
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", themeCtx.themeMode.toString());
  }, [themeCtx.themeMode]);

  useEffect(() => {
    console.log(themeCtx.themeMode);
    if (
      pageCtx.currentPage === Page.HOME ||
      pageCtx.currentPage === Page.ABOUT
    ) {
      transformCtx.setTransform(0);
    }

    if (
      pageCtx.currentPage === Page.PROJECTS ||
      pageCtx.currentPage === Page.SKILLS
    ) {
      transformCtx.setTransform(25);
    }

    if (pageCtx.currentPage === Page.CONTACT) {
      transformCtx.setTransform(50);
    }
  }, [pageCtx, transformCtx]);

  return (
    <Container transform={transformCtx.transform}>
      <ThemeSwitch isDarkMode={themeCtx.themeMode === Theme.DARK}>
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
      </ThemeSwitch>
      <Global />
      <Background isDarkMode={themeCtx.themeMode === Theme.DARK} />
      <ColorBackground isDarkMode={themeCtx.themeMode === Theme.DARK} />
      <Background />

      {children}
      <Footer />
    </Container>
  );
};

export default SplitBackground;

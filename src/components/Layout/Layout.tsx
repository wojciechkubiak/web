import { ReactNode, useContext, useEffect, useState } from "react";
import { Background, ColorBackground, Container, Global } from "./LayoutStyle";
import TransformContext from "../../context/Transform";
import PageContext from "../../context/Page";
import ThemeContext from "../../context/Style";
import { Page } from "../../types/Pages";
import { Theme } from "../../types/Themes";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

interface ISplitBackground {
  children: ReactNode;
}

//0-25-50
const SplitBackground = ({ children }: ISplitBackground) => {
  const transformCtx = useContext(TransformContext);
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [isAnimatedLeft, setIsAnimatedLeft] = useState(false);
  const [isAnimatedRight, setIsAnimatedRight] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      themeCtx.setThemeMode(
        mode === Theme.DARK.toString() ? Theme.DARK : Theme.LIGHT
      );
    }

    if (!isAnimatedLeft) setIsAnimatedLeft(true);
  }, []);

  useEffect(() => {
    if (pageCtx.currentPage === Page.CONTACT && !isAnimatedRight)
      setTimeout(() => {
        setIsAnimatedRight(true);
      }, 500);
  }, [pageCtx]);

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
      <Global />
      <Background
        isDarkMode={themeCtx.themeMode === Theme.DARK}
        isLeft={true}
        isAnimated={isAnimatedLeft}
      />
      <ColorBackground isDarkMode={themeCtx.themeMode === Theme.DARK} />
      <Background
        isDarkMode={themeCtx.themeMode === Theme.DARK}
        isLeft={false}
        isAnimated={isAnimatedRight}
      />

      {children}
    </Container>
  );
};

export default SplitBackground;

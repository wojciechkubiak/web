import { ReactNode, useContext, useEffect, useState } from 'react';

import TransformContext from '../../context/Transform';
import PageContext from '../../context/Page';
import ThemeContext from '../../context/Style';
import SoundContext from '../../context/Sound';

import { Page } from '../../types/Pages';
import { Theme } from '../../types/Themes';

import {
  Background,
  ColorBackground,
  Container,
  Global,
} from './LayoutStyle';

interface ISplitBackground {
  children: ReactNode;
}

const SplitBackground = ({ children }: ISplitBackground) => {
  const transformCtx = useContext(TransformContext);
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);
  const soundCtx = useContext(SoundContext);

  const [isAnimatedLeft, setIsAnimatedLeft] = useState(false);
  const [isAnimatedRight, setIsAnimatedRight] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode) {
      themeCtx.setThemeMode(
        mode === Theme.DARK.toString() ? Theme.DARK : Theme.LIGHT,
      );
    }

    if (!isAnimatedLeft && !soundCtx.isAudioWindow)
      setIsAnimatedLeft(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundCtx.isAudioWindow, isAnimatedLeft]);

  useEffect(() => {
    if (pageCtx.currentPage === Page.CONTACT && !isAnimatedRight)
      setTimeout(() => {
        setIsAnimatedRight(true);
      }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCtx]);

  useEffect(() => {
    localStorage.setItem('mode', themeCtx.themeMode.toString());
  }, [themeCtx.themeMode]);

  useEffect(() => {
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
      <Global theme={themeCtx.themeMode} />
      <Background
        isDarkMode={themeCtx.themeMode === Theme.DARK}
        isLeft={true}
        isAnimated={isAnimatedLeft}
      />
      <ColorBackground
        isDarkMode={themeCtx.themeMode === Theme.DARK}
      />
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

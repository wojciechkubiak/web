import styled, { createGlobalStyle } from 'styled-components';
import BackgroundLeft from '../../assets/images/bgleftfhd.webp';
import BackgroundRight from '../../assets/images/bgrightfhd.webp';
import { Theme } from '../../types/Themes';

interface ILayoutStyle {
  isLeft?: boolean;
  isAnimated?: boolean;
  transform?: number;
  isDarkMode?: boolean;
  theme: Theme;
}

export const Global = createGlobalStyle<ILayoutStyle>`
  body {
    background-color: white;
    height: 100vh !important;
    overflow: hidden !important;
  }
  
  body, h1 {
    margin: 0 !important;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme === Theme.DARK ? '#515151' : '#f1f1f1'};
  }

  ::-webkit-scrollbar-thumb {
    background: #d088ad;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #964c79;
  }
`;

export const GlobalProxy: any = Global;

export const Container = styled.div<ILayoutStyle>`
  position: relative;
  z-index: 1000;
  min-width: 200vw;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 500ms transform;
  transform: ${(props) => `translateX(-${props.transform}%)`};
  overflow: hidden;
`;

export const Background = styled.div<ILayoutStyle>`
  min-width: 50vw;
  width: 50%;
  height: 100%;
  min-height: 100vh;
  margin: 0 !important;
  background-image: ${(props) =>
    props.isLeft
      ? `url(${BackgroundLeft})`
      : `url(${BackgroundRight})`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: ${(props) => (props.isAnimated ? '105%' : '100%')};
  background-repeat: no-repeat;
  overflow: hidden;
  transition: 1500ms;
  filter: ${(props) => (props.isDarkMode ? 'grayscale(1)' : 'none')};

  @media screen and (max-width: 1510px) {
    background-size: cover;
  }

  @media screen and (max-width: 920px) {
    min-width: 100vw;
    width: 100%;
  }
`;

export const ColorBackground = styled.div<ILayoutStyle>`
  min-width: 100vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin: 0 !important;
  background-color: ${(props) =>
    props.isDarkMode ? '#313131' : 'white'};
  transition: 500ms transform;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

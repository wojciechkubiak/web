import styled from 'styled-components';
import { Theme } from '../../types/Themes';
import { Page } from '../../types/Pages';

interface IMainPageStyle {
  isAnimated?: boolean;
  isActive?: boolean;
  theme?: Theme;
  currentPage?: Page;
}

export const IndexPageContainer = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  position: absolute; // TODO: may make some weird things
  overflow-x: hidden;
`;

export const MainPage = styled.div<IMainPageStyle>`
  width: 50%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: absolute; // TODO: may make some weird things
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;
  transition: 1000ms;
  transform: ${(props) =>
    props.isActive ? 'translateX(0%)' : 'translateX(-150%)'};
`;

export const Headers = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 920px) {
    min-height: 200px;
    align-items: center;
  }
`;

export const Header = styled.h1<IMainPageStyle>`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 7rem;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(0, 0, 0, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border: ${(props) =>
    props.theme === Theme.DARK
      ? '2px solid white'
      : '2px solid transparent'};
  padding: 20px 80px;
  left: 120px;
  margin-bottom: 80px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: 1000ms transform;
  transform: ${(props) =>
    props.isAnimated ? 'translateX(0%)' : 'translateX(150%)'};

  @media screen and (max-width: 1600px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.8)'
        : 'translateX(150%) scale(0.8)'};
  }

  @media screen and (max-width: 1420px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.6)'
        : 'translateX(150%) scale(0.6)'};
  }

  @media screen and (max-width: 1200px) {
    left: 120px;
    font-size: 6rem;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.9)'
        : 'translateX(250%) scale(0.9)'};
  }

  @media screen and (max-width: 920px) {
    left: 0;
    font-size: 6rem;
    text-align: center;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.7)'
        : 'translateX(250%) scale(0.7)'};
  }

  @media screen and (min-width: 1921px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(1.2)'
        : 'translateX(150%) scale(1.2)'};
  }

  @media screen and (min-width: 2160px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(2)'
        : 'translateX(150%) scale(2)'};
  }
`;

export const Subheader = styled.h1<IMainPageStyle>`
  position: relative;
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  width: 920px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(0, 0, 0, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? 'white' : '#313131'};
  padding: 20px 40px;
  text-align: center;
  left: 420px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: 1000ms transform;
  transform: ${(props) =>
    props.isAnimated ? 'translateX(0%)' : 'translateX(150%)'};

  @media screen and (max-width: 1600px) {
    left: 380px;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.8)'
        : 'translateX(150%) scale(0.8)'};
  }

  @media screen and (max-width: 1420px) {
    left: 320px;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.6)'
        : 'translateX(150%) scale(0.6)'};
  }

  @media screen and (max-width: 1200px) {
    left: 240px;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.7)'
        : 'translateX(250%) scale(0.7)'};
  }

  @media screen and (max-width: 920px) {
    width: 70%;
    left: 0;
    text-align: center;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.6)'
        : 'translateX(250%) scale(0.6)'};
  }

  @media screen and (min-width: 1921px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(1.2)'
        : 'translateX(150%) scale(1.2)'};
  }

  @media screen and (min-width: 2160px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(2)'
        : 'translateX(150%) scale(2)'};
  }
`;

export const ButtonContainer = styled.div<IMainPageStyle>`
  position: relative;
  left: 500px;
  transition: 1000ms;
  transform: ${(props) =>
    props.isAnimated ? 'translateX(0%)' : 'translateX(250%)'};

  @media screen and (max-width: 1600px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.8)'
        : 'translateX(250%) scale(0.8)'};
  }

  @media screen and (max-width: 1420px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.7)'
        : 'translateX(250%) scale(0.7)'};
  }

  @media screen and (max-width: 1200px) {
    left: 300px;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(1)'
        : 'translateX(250%) scale(1)'};
  }

  @media screen and (max-width: 920px) {
    width: 90%;
    left: 0;
    text-align: center;
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(0.8)'
        : 'translateX(250%) scale(0.8)'};
    background-color: #adb757;

    & > button {
      margin-bottom: 0 !important;
      color: white !important;
      border-bottom: none !important;
    }

    & > button > h4 {
      color: white !important;
    }
  }

  @media screen and (min-width: 1921px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(1.2)'
        : 'translateX(150%) scale(1.2)'};
  }

  @media screen and (min-width: 2160px) {
    transform: ${(props) =>
      props.isAnimated
        ? 'translateX(0%) scale(2)'
        : 'translateX(150%) scale(2)'};
  }
`;

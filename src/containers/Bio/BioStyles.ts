import styled from 'styled-components';

import { Page } from '../../types/Pages';
import { Theme } from '../../types/Themes';

interface IBioStyles {
  isAnimated?: boolean;
  isActive?: boolean;
  theme?: Theme;
  currentPage?: Page;
  background?: String;
}

export const BioPage = styled.div<IBioStyles>`
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
    props.currentPage === Page.ABOUT
      ? 'translateX(0%)'
      : props.currentPage === Page.HOME
      ? 'translateX(150%)'
      : 'translateX(-150%)'};
`;

export const BioContent = styled.div<IBioStyles>`
  width: 60%;
  min-width: 600px;
  max-height: 80vh;
  padding: 40px;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border: ${(props) =>
    props.theme === Theme.DARK
      ? '3px solid white'
      : '3px solid grey'};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media screen and (max-width: 1600px) {
    transform: scale(0.8);
    overflow-y: scroll !important;
  }

  @media screen and (max-width: 920px) {
    min-width: 90%;
  }

  & > h1 {
    width: 320px;
    font-size: 42px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: ${(props) =>
      props.theme === Theme.DARK ? 'rgba(0, 0, 0, 0.8)' : 'white'};
    background-color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : '#313131'};
    padding: 4px 20px;
  }

  & > p {
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : 'rgba(0, 0, 0, 0.87)'};
    font-size: 18px;
    line-height: 36px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    padding-bottom: 32px;
    margin-bottom: 32px;
    margin-top: 32px;
  }

  @media screen and (max-width: 920px) {
    & > h1 {
      width: 240px;
    }

    & > p {
      text-align: justify;
    }
  }
`;

export const BioButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Strong = styled.strong<IBioStyles>`
  background-color: ${(props) => `${props.background}`};
  color: white;
  padding: 0 4px;
`;

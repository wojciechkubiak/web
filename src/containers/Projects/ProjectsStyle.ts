import styled from 'styled-components';

import { Theme } from '../../types/Themes';
import { RESOLUTION } from '../../utils/resolutions';

interface IProjectsStyles {
  transform?: number;
  theme?: Theme;
  isLeft?: boolean;
}

export const Container = styled.div<IProjectsStyles>`
  width: 50%;
  min-width: 100vw;
  min-height: 100vh;
  transition: 1000ms transform;
  position: absolute; // TODO: may make some weird things
  overflow: hidden;
  transform: ${(props) =>
    `translateX(${props.transform}%) scale(0.9)`};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${RESOLUTION.HD}px) {
    justify-content: center;
    transform: ${(props) =>
      `translateX(${props.transform}%) scale(0.7)`};
    max-height: none;
    height: auto;
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    width: 70%;
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) and (max-height: 700px) {
    transform: ${(props) =>
      `translateX(${props.transform}%) scale(0.6)`};
  }
`;

export const Header = styled.h1<IProjectsStyles>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 94px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(0, 0, 0, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border-bottom: 8px solid #adb757;
  border-right: 4px solid #adb757;
  padding: 0 20px;

  @media screen and (max-width: ${RESOLUTION.HD}px) {
    transform: scale(0.8);
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
`;
export const ButtonsContainer = styled.div`
  @media screen and (max-width: ${RESOLUTION.HD}px) {
    transform: scale(1);
  }
`;

export const SwiperInfo = styled.p`
  color: grey;
`;

export const ButtonNav = styled.button<IProjectsStyles>`
  position: absolute;
  left: ${(props) => (props.isLeft ? '12px' : 'auto')};
  right: ${(props) => (props.isLeft ? 'auto' : '12px')};
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  z-index: 2000;
  border: none;

  & > svg {
    width: 82px;
    height: 82px;
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : '#313131'};
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    top: 81%;
  }
`;

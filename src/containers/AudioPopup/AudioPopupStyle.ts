import styled from 'styled-components';

import { Theme } from '../../types/Themes';

interface IAudioContainer {
  theme: Theme;
}

export const AudioContainer = styled.div<IAudioContainer>`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border: ${(props) =>
    props.theme === Theme.DARK
      ? '3px solid white'
      : '3px solid grey'};
  min-width: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2000;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 40px;

  @media screen and (max-width: 1600px) {
    transform: translate(-50%, -50%) scale(0.8);
  }

  @media screen and (max-width: 920px) {
    transform: translate(-50%, -50%) scale(0.5);
  }
`;

export const AudioAnimation = styled.div`
  margin: 32px 0;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subinfo = styled.p`
  color: grey;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-align: end;
  width: 100%;
  margin: 0 !important;
`;

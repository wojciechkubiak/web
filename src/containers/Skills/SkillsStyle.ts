import styled from 'styled-components';
import { Theme } from '../../types/Themes';

interface ISkillsStyles {
  transform?: number;
  theme?: Theme;
}

export const Container = styled.div<ISkillsStyles>`
  width: 50%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  transition: 1000ms transform;
  position: absolute; // TODO: may make some weird things
  overflow-x: hidden;
  transform: ${(props) => `translateX(${props.transform}%)`};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SkillsBody = styled.div<ISkillsStyles>`
  width: 80%;
  max-height: 60%;
  overflow-y: scroll;
  border-bottom: 4px solid grey;
  padding: 20px;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  @media screen and (max-width: 1600px) {
    transform: scale(0.8);
  }
`;

export const SkillsContainer = styled.div<ISkillsStyles>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
`;

export const Header = styled.h1<ISkillsStyles>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 94px;
  width: 450px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(0, 0, 0, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border-bottom: 8px solid #adb757;
  border-right: 4px solid #adb757;
  padding: 0 20px;
`;

export const ButtonsContainer = styled.div``;

import styled from 'styled-components';

import { Theme } from '../../types/Themes';
import { RESOLUTION } from '../../utils/resolutions';

interface IProjectCard {
  theme?: Theme;
  isMobile?: boolean;
}

export const ProjectsWebCardContainer = styled.div<IProjectCard>`
  padding-top: 60px;
  max-height: 660px;
  width: 600px;
  margin: 0 auto;

  @media only screen and (max-width: ${RESOLUTION.LG}px) {
    padding: 20px;
  }

  @media only screen and (max-width: ${RESOLUTION.SM}px) {
    padding: 20px 0 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    min-height: 420px;
    transform: scale(0.95);
    border-bottom: 4px solid grey;
  }
`;

export const CardWebImage = styled.img<IProjectCard>`
  max-width: 500px;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? 'white' : '#313131'};
  padding: 5px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  filter: grayscale(1);
`;

export const ProjectWebLinks = styled.div<IProjectCard>`
  display: flex;
  justify-content: center;
`;

export const ProjectsMobileCardContainer = styled.div<IProjectCard>`
  padding-top: 60px;
  max-height: 660px;
  width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${RESOLUTION.LG}px) {
    padding: 20px;
  }

  @media only screen and (max-width: ${RESOLUTION.SM}px) {
    padding: 20px 0 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 450px;
    transform: scale(0.95);
    border-bottom: 4px solid grey;
    overflow-y: scroll;
  }
`;

export const CardMobileImage = styled.img<IProjectCard>`
  max-width: 220px;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? 'white' : '#313131'};
  padding: 5px;
  position: relative;
  z-index: 500;
  filter: grayscale(1);

  @media only screen and (max-width: ${RESOLUTION.SM}px) {
    width: 320px;
    height: 640px;
  }
`;

export const ProjectMobileLinks = styled.div<IProjectCard>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Info = styled.div<IProjectCard>`
  box-shadow: ${(props) =>
    props.theme !== Theme.DARK &&
    'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 20px 10px -10px, rgba(0, 0, 0, 0.3) 0px 10px 20px -10px'};
  min-width: 320px;
  height: ${(props) => (props.isMobile ? '320px' : 'auto')};
  border: 4px solid grey;
  transform: ${(props) =>
    props.isMobile ? 'translate(-4px, 10px)' : 'translateY(-7px)'};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  & > h1 {
    width: 260px;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : 'rgba(0, 0, 0, 0.87)'};
    font-weight: 600;
    text-align: center;
    border-bottom: 4px solid #964c79;
    word-wrap: break-word;
  }

  & > p {
    font-family: 'Montserrat', sans-serif;
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : 'rgba(0, 0, 0, 0.87)'};
    font-weight: 400;
    text-align: justify;
    line-height: 24px;
    font-size: 20px;

    @media screen and (max-width: ${RESOLUTION.HD}px) {
      font-size: 22px;
    }
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    box-shadow: none;
    transform: translate(0, -4px);
    width: ${(props) => (props.isMobile ? '80%' : 'auto')};
  }
`;

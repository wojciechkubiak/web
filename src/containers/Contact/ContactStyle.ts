import styled from 'styled-components';

import { Theme } from '../../types/Themes';
import { RESOLUTION } from '../../utils/resolutions';

interface IContactStyles {
  transform?: number;
  theme?: Theme;
}

export const Container = styled.div<IContactStyles>`
  width: 50%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  transition: 1000ms transform;
  position: absolute; // TODO: may make some weird things
  overflow: hidden;
  transform: ${(props) => `translateX(${props.transform}%)`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    max-height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormContainer = styled.div<IContactStyles>`
  width: 30%;
  margin-left: 8%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  border: ${(props) =>
    props.theme === Theme.DARK
      ? '2px solid white'
      : ' 3px solid grey    '};
  box-shadow: ${(props) =>
    props.theme !== Theme.DARK &&
    'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 20px 10px -10px, rgba(0, 0, 0, 0.3) 0px 10px 20px -10px'};

  @media screen and (max-width: ${RESOLUTION.HD}px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: ${RESOLUTION.MD}px) {
    transform: scale(0.7);
    width: 40%;
    margin-left: 4%;
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SocialContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    flex-direction: row;
    bottom: 60px;
    width: 80%;
  }
`;

export const Socials = styled.div<IContactStyles>`
  position: absolute;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};
  right: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(255, 255, 255, 0.2) 0 1px 1px 0 inset,
    rgba(50, 50, 93, 0.7) 0 20px 50px -10px,
    rgba(0, 0, 0, 0.9) 0px 10px 20px -15px;
  padding: 20px;

  & > svg {
    margin: 20px 0;
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : '#313131'};
    cursor: pointer;
  }

  @media screen and (max-width: ${RESOLUTION.HD}px) {
    transform: scale(0.6);
    right: 6px;
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 32px;
`;

export const Header = styled.h1<IContactStyles>`
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

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    font-size: 72px;
  }
`;

export const Input = styled.input<IContactStyles>`
  border: none;
  border-bottom: ${(props) =>
    props.theme === Theme.DARK
      ? ' 4px solid white'
      : ' 4px solid #313131'};
  border-right: ${(props) =>
    props.theme === Theme.DARK
      ? ' 2px solid white'
      : ' 2px solid #313131'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  padding: 10px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(0, 0, 0, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea<IContactStyles>`
  border: none;
  border-bottom: ${(props) =>
    props.theme === Theme.DARK
      ? ' 4px solid white'
      : ' 4px solid #313131'};
  border-right: ${(props) =>
    props.theme === Theme.DARK
      ? ' 2px solid white'
      : ' 2px solid #313131'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 22px;
  resize: none;
  padding: 20px;
  min-width: 400px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? 'rgba(255, 255, 255, 1)'
      : 'rgba(0, 0, 0, 0.8)'};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? '#313131' : 'white'};

  &:focus {
    box-shadow: none;
    outline: none;
  }

  @media screen and (max-width: ${RESOLUTION.SM}px) {
    min-width: 80%;
  }
`;

export const SubmitButton = styled.button<IContactStyles>`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    color: ${(props) =>
      props.theme === Theme.DARK ? 'white' : '#313131'};
  }
`;

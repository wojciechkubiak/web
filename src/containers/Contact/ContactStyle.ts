import styled from "styled-components";
import { Theme } from "../../types/Themes";

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
  overflow-x: hidden;
  transform: ${(props) => `translateX(${props.transform}%)`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 30%;
  margin-left: 8%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const SocialContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 94px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 0.8)"};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? "#313131" : "white"};
  border-bottom: 8px solid #adb757;
  border-right: 4px solid #adb757;
  padding: 0 20px;
`;

export const Input = styled.input<IContactStyles>`
  border: none;
  border-bottom: ${(props) =>
    props.theme === Theme.DARK ? " 4px solid white" : " 4px solid #313131"};
  border-right: ${(props) =>
    props.theme === Theme.DARK ? " 2px solid white" : " 2px solid #313131"};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  padding: 10px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 0.8)"};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? "#212121" : "white"};

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const TextArea = styled.textarea<IContactStyles>`
  border: none;
  border-bottom: ${(props) =>
    props.theme === Theme.DARK ? " 4px solid white" : " 4px solid #313131"};
  border-right: ${(props) =>
    props.theme === Theme.DARK ? " 2px solid white" : " 2px solid #313131"};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 22px;
  resize: none;
  padding: 20px;
  min-width: 400px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 0.8)"};
  background-color: ${(props) =>
    props.theme === Theme.DARK ? "#212121" : "white"};

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const SubmitButton = styled.button<IContactStyles>`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    color: ${(props) => (props.theme === Theme.DARK ? "white" : "#313131")};
  }
`;

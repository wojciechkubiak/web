import styled from "styled-components";
import { Theme } from "../../types/Themes";

interface IIconButton {
  isReversed?: boolean;
  theme?: Theme;
}

export const IconButtonS = styled.button<IIconButton>`
  display: flex;
  flex-direction: ${(props) => (props.isReversed ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  border: none;
  //border-right: ${(props) =>
    props.isReversed ? "2px solid #313131" : "none"};
  //border-left: ${(props) =>
    props.isReversed ? "none" : "2px solid #313131"};
  //border-bottom: 4px solid #313131;
  background-color: transparent;

  & > svg {
    color: ${(props) => (props.theme === Theme.DARK ? "white" : "#313131")};
  }
`;

export const ButtonText = styled.h4<IIconButton>`
  font-size: 42px;
  margin: 0;
  margin-right: 16px;
  color: ${(props) =>
    props.theme === Theme.DARK
      ? "rgba(255, 255, 255, 0.87)"
      : "rgba(0, 0, 0, 0.87)"};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

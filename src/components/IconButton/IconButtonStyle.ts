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
  border-bottom: 4px solid
    ${(props) => (props.theme === Theme.DARK ? "#313131" : "white")};
  background-color: transparent;
  transition: 200ms;

  & > svg {
    color: ${(props) => (props.theme === Theme.DARK ? "white" : "#313131")};
  }

  &:hover {
    border-bottom: 4px solid
      ${(props) => (props.theme === Theme.DARK ? "white" : "#313131")};
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
  transition: 1000ms;

  &:hover {
    color: ${(props) =>
      props.theme === Theme.DARK
        ? "rgba(255, 255, 255, 1)"
        : "rgba(0, 0, 0, 1)"};
  }
`;

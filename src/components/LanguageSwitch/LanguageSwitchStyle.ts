import styled from "styled-components";
import { Theme } from "../../types/Themes";
import { Page } from "../../types/Pages";

interface ILanguageSwitch {
  isActive?: boolean;
  theme: Theme;
  page?: Page;
}

export const LanguageSwitchContainer = styled.div<ILanguageSwitch>`
  position: fixed;
  z-index: 2000;
  left: 16px;
  bottom: 16px;
  height: 45px;
  padding: 8px;
  border-radius: 12px;
  border: ${(props) =>
    props.page === Page.ABOUT || props.page === Page.HOME
      ? "2px solid transparent"
      : props.isActive
      ? "2px solid #2a2a2a"
      : "2px solid white"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.isActive ? "#313131" : "white")};
  box-shadow: rgba(255, 255, 255, 0.2) 0 1px 1px 0 inset,
    rgba(50, 50, 93, 0.7) 0 20px 50px -10px,
    rgba(0, 0, 0, 0.9) 0px 10px 20px -15px;
`;

export const LanguageOption = styled.div<ILanguageSwitch>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme === Theme.DARK
        ? "white"
        : "#313131"
      : props.theme === Theme.DARK
      ? "#313131"
      : "white"};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > p {
    color: ${(props) =>
      props.isActive
        ? props.theme === Theme.DARK
          ? "#313131"
          : "white"
        : props.theme === Theme.DARK
        ? "white"
        : "#313131"};
    width: 29px;
    height: 29px;
    text-align: center;
  }
`;
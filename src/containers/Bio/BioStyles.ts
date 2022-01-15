import styled from "styled-components";
import { Page } from "../../types/Pages";
import { Theme } from "../../types/Themes";

interface IBioStyles {
  isAnimated?: boolean;
  isActive?: boolean;
  theme?: Theme;
  currentPage?: Page;
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
      ? "translateX(0%)"
      : props.currentPage === Page.HOME
      ? "translateX(150%)"
      : "translateX(-150%)"};
`;

export const BioContent = styled.div<IBioStyles>`
  width: 60%;
  min-width: 600px;
  max-height: 80vh;
  padding: 40px;
  background-color: ${(props) =>
    props.theme === Theme.DARK ? "#313131" : "white"};
  border: ${(props) =>
    props.theme === Theme.DARK ? "2px solid white" : "2px solid transparent"};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  & > p {
    color: ${(props) =>
      props.theme === Theme.DARK ? "white" : "rgba(0, 0, 0, 0.87)"};
    font-size: 18px;
    line-height: 28px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }

  @media screen and (max-height: 890px) {
    overflow-y: scroll;
  }
`;

export const BioButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

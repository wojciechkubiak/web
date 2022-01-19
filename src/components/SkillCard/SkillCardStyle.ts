import styled from "styled-components";
import { Theme } from "../../types/Themes";

interface ICard {
  theme?: Theme;
}

export const Card = styled.div<ICard>`
  width: 450px;
  min-height: 240px;
  background-color: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
  rgba(50, 50, 93, 0.25) 0px 20px 10px -10px,
  rgba(0, 0, 0, 0.3) 0px 10px 20px -10px;
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  border: 3px solid grey;
  background-color: ${(props) => props.theme === Theme.DARK ? "#313131" : "white"};

  @media screen and (max-width: 1600px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 920px) {
    width: 100%;
  }
  `

export const CardImage = styled.img`
  height: 42px;
  width: 42px;
`;


export const CardBody = styled.div<ICard>`
  width: 65%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  z-index: 200;
  background-color: ${(props) => props.theme === Theme.DARK ? "#313131" : "white"};

  & > div {
    margin: 24px 0;
  }

  & > h1 {
    color: ${(props) => props.theme === Theme.DARK ? "white" : "rgba(0, 0, 0, 0.87)"};
    font-size: 42px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    text-align: center;
    border-bottom: 4px solid #964c79;
  }

  & > div > p {
    color: ${(props) => props.theme === Theme.DARK ? "white" : "rgba(0, 0, 0, 0.87)"};
    text-align: center;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    border-bottom: 1px solid #E2E2E2;
    line-height: 32px;
  }

  & > div > p:last-child {
    border-bottom: ${(props) => props.theme === Theme.DARK ? "#313131" : "1px solid white"};
  }

  @media screen and (max-width: 920px) {
    & > h1 {
      font-size: 36px;
    }
  }
`;
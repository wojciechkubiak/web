import * as React from "react";
import styled from "styled-components";
import { ReactNode } from "react";

interface IBackground {
  background: String;
}

const Background = styled.div<IBackground>`
  min-width: 100vw;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 !important;
  background-image: ${(props) => `url("${props.background}") `};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

interface IAnimatedBackground {
  children: ReactNode;
  images: Array<String>;
}

const AnimatedBackground = ({ children, images }: IAnimatedBackground) => {
  const x = 5;

  console.log(images[0]);
  return <Background background={images[1]}>{children}</Background>;
};

export default AnimatedBackground;

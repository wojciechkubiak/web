import styled from "styled-components";

interface IProjectsStyles {
  transform: number;
}

export const Container = styled.div<IProjectsStyles>`
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
  justify-content: center;
  align-items: center;
`;
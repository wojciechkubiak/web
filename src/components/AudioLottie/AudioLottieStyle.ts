import styled from "styled-components";

interface ILottie {
  size: number,
  opacity: number,
}

export const Container = styled.div`
  position: relative;
`
export const Lottie = styled.div<ILottie>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  opacity: ${(props) => props.opacity};
`
import styled from 'styled-components';

interface IHideShow {
  isDarkMode: boolean;
}

export const Container = styled.div<IHideShow>`
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 19px;
  width: 42px;
  height: 42px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset,
    rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: ${(props) =>
    props.isDarkMode ? '#313131' : 'white'};

  & > svg {
    color: ${(props) => (props.isDarkMode ? 'white' : '#313131')};
    width: 32px;
    height: 32px;
  }
`;

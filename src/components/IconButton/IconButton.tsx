import { ReactNode, useContext } from 'react';

import ThemeContext from '../../context/Style';

import { ButtonText, IconButtonS } from './IconButtonStyle';

interface IIconButton {
  children: ReactNode;
  onClick: () => void;
  isReversed?: boolean;
  text: String;
}

const IconButton = ({
  children,
  onClick,
  isReversed = false,
  text,
}: IIconButton) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <IconButtonS
      onClick={onClick}
      isReversed={isReversed}
      theme={themeCtx.themeMode}
    >
      {children}
      <ButtonText theme={themeCtx.themeMode}>{text}</ButtonText>
    </IconButtonS>
  );
};

export default IconButton;

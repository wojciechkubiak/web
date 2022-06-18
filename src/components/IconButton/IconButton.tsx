import { ReactNode, useContext } from 'react';

import ThemeContext from '../../context/Style';
import { ButtonText, IconButtonS } from './IconButtonStyle';

interface IIconButton {
  children: ReactNode;
  onClick: () => void;
  text: String;
  isReversed?: boolean;
}

const IconButton = ({
  children,
  onClick,
  text,
  isReversed = false,
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

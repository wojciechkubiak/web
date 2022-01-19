import { useContext } from 'react';
import ThemeContext from '../../context/Style';
import { Theme } from '../../types/Themes';
import { Container } from './HideShowSwitchStyle';
import { GiSettingsKnobs } from 'react-icons/gi';

interface IHideShowSwitch {
  isOn: boolean;
  onClick: () => void;
}

const HideShowSwitch = ({ isOn, onClick }: IHideShowSwitch) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Container
      isDarkMode={themeCtx.themeMode === Theme.DARK}
      onClick={onClick}
    >
      <GiSettingsKnobs />
    </Container>
  );
};

export default HideShowSwitch;

import { useContext, useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import ThemeContext from '../../context/Style';
import SoundContext from '../../context/Sound';
import PageContext from '../../context/Page';

import { Page } from '../../types/Pages';

import {
  Header,
  Headers,
  IndexPageContainer,
  MainPage as MainPageStyled,
  Subheader,
  ButtonContainer,
} from './MainPageStyle';
import IconButton from '../../components/IconButton/IconButton';
import Bio from '../Bio/Bio';

interface IMainPage {
  t: any;
}

const MainPage = ({ t }: IMainPage) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);
  const soundCtx = useContext(SoundContext);

  const [isHeaderAnimated, setIsHeaderAnimated] = useState(false);
  const [isSubheaderAnimated, setIsSubheaderAnimated] =
    useState(false);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  useEffect(() => {
    if (!soundCtx.isAudioWindow) {
      setIsHeaderAnimated(true);
      setTimeout(() => {
        setIsSubheaderAnimated(true);
      }, 500);
      setTimeout(() => {
        setIsButtonAnimated(true);
      }, 1000);
    }
  }, [soundCtx.isAudioWindow]);

  return (
    <IndexPageContainer>
      <MainPageStyled isActive={pageCtx.currentPage === Page.HOME}>
        <Headers>
          <Header
            isAnimated={isHeaderAnimated}
            theme={themeCtx.themeMode}
          >
            Wojciech Kubiak
          </Header>
          <Subheader
            isAnimated={isSubheaderAnimated}
            theme={themeCtx.themeMode}
          >
            Flutter / Web developer
          </Subheader>
        </Headers>
        <ButtonContainer isAnimated={isButtonAnimated}>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.ABOUT)}
            text={t('home.find_out', { framework: 'react-i18next' })}
            isReversed
          >
            <BsArrowRight size={64} />
          </IconButton>
        </ButtonContainer>
      </MainPageStyled>
      <Bio t={t} />
    </IndexPageContainer>
  );
};

export default MainPage;

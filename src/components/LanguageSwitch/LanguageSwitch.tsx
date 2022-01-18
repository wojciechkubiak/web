import { Theme } from '../../types/Themes';
import {
  LanguageOption,
  LanguageSwitchContainer,
} from './LanguageSwitchStyle';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/Style';
import PageContext from '../../context/Page';
import AudioLottie from '../AudioLottie/AudioLottie';
import SoundContext from '../../context/Sound';

const languages = ['en', 'pl'];

const LanguageSwitch = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const themeCtx = useContext(ThemeContext);
  const pageCtx = useContext(PageContext);
  const soundCtx = useContext(SoundContext);

  return (
    <LanguageSwitchContainer
      page={pageCtx.currentPage}
      isActive={themeCtx.themeMode === Theme.DARK}
    >
      {!soundCtx.isAudioWindow && (
        <AudioLottie width={45} height={45} isInteractive={true} />
      )}
      <LanguageOption
        theme={themeCtx.themeMode}
        isActive={true}
        onClick={() => setShowOptions(!showOptions)}
        isMarginLeft={!soundCtx.isAudioWindow}
      >
        <p>{pageCtx.language.toUpperCase()}</p>
      </LanguageOption>
      {showOptions && (
        <LanguageOption
          theme={themeCtx.themeMode}
          isActive={false}
          onClick={() => {
            pageCtx.setLanguage(
              pageCtx.language.toUpperCase() === 'EN' ? 'pl' : 'en',
            );
            setShowOptions(false);
          }}
        >
          <p>
            {pageCtx.language.toUpperCase() === 'EN' ? 'PL' : 'EN'}
          </p>
        </LanguageOption>
      )}
    </LanguageSwitchContainer>
  );
};

export default LanguageSwitch;

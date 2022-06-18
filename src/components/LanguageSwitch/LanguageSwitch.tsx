import { useContext, useState } from 'react';

import { Theme } from '../../types/Themes';
import ThemeContext from '../../context/Style';
import PageContext from '../../context/Page';
import SoundContext from '../../context/Sound';
import {
  LanguageOption,
  LanguageSwitchContainer,
} from './LanguageSwitchStyle';
import AudioLottie from '../AudioLottie/AudioLottie';

const LanguageSwitch = () => {
  const themeCtx = useContext(ThemeContext);
  const pageCtx = useContext(PageContext);
  const soundCtx = useContext(SoundContext);

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const LOTTIE_SIZE = 45;

  return (
    <LanguageSwitchContainer
      page={pageCtx.currentPage}
      isActive={themeCtx.themeMode === Theme.DARK}
    >
      {!soundCtx.isAudioWindow && (
        <AudioLottie
          width={LOTTIE_SIZE}
          height={LOTTIE_SIZE}
          isInteractive={true}
        />
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

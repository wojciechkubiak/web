import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import SoundContext from '../../context/Sound';
import {
  AudioAnimation,
  AudioContainer,
  Icons,
  Subinfo,
} from './AudioPopupStyle';
import ThemeContext from '../../context/Style';

import IconButton from '../../components/IconButton/IconButton';
import AudioLottie from '../../components/AudioLottie/AudioLottie';

interface IAudioPopup {
  t: any;
}

const AudioPopup = ({ t }: IAudioPopup) => {
  const soundCtx = useContext(SoundContext);
  const themeCtx = useContext(ThemeContext);

  const ICON_SIZE = 64;

  return (
    <AudioContainer theme={themeCtx.themeMode}>
      <AudioAnimation>
        <AudioLottie />
      </AudioAnimation>

      <Icons>
        <IconButton
          onClick={() => {
            soundCtx.setIsAudio(false);
            soundCtx.setIsAudioWindow(false);
            localStorage.setItem('isInit', 'true');
          }}
          text={t('global.continue', { framework: 'react-i18next' })}
          isReversed={true}
        >
          <BsArrowRight size={ICON_SIZE} />
        </IconButton>
        <IconButton
          onClick={() => {
            soundCtx.setIsAudio(true);
            soundCtx.setIsAudioWindow(false);
            localStorage.setItem('isInit', 'true');
          }}
          text={t('global.continue_sound', {
            framework: 'react-i18next',
          })}
          isReversed={true}
        >
          <BsArrowRight size={ICON_SIZE} />
        </IconButton>
      </Icons>
      <Subinfo>
        {t('global.popup', {
          framework: 'react-i18next',
        })}
      </Subinfo>
    </AudioContainer>
  );
};

export default AudioPopup;

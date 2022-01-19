import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import IconButton from '../../components/IconButton/IconButton';
import SoundContext from '../../context/Sound';
import { AudioAnimation, AudioContainer } from './AudioPopupStyle';

import Lottie from 'react-lottie';
import ThemeContext from '../../context/Style';
import AudioLottie from '../../components/AudioLottie/AudioLottie';

interface IAudioPopup {
  t: any;
}

const AudioPopup = ({ t }: IAudioPopup) => {
  const soundCtx = useContext(SoundContext);
  const themeCtx = useContext(ThemeContext);

  return (
    <AudioContainer theme={themeCtx.themeMode}>
      <AudioAnimation>
        <AudioLottie />
      </AudioAnimation>

      <IconButton
        onClick={() => {
          soundCtx.setIsAudio(false);
          soundCtx.setIsAudioWindow(false);
          localStorage.setItem('isInit', 'true');
        }}
        text={t('global.continue', { framework: 'react-i18next' })}
        isReversed={true}
      >
        <BsArrowRight size={64} />
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
        <BsArrowRight size={64} />
      </IconButton>
    </AudioContainer>
  );
};

export default AudioPopup;

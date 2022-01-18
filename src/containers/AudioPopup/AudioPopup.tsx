import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import IconButton from '../../components/IconButton/IconButton';
import SoundContext from '../../context/Sound';
import { AudioAnimation, AudioContainer } from './AudioPopupStyle';

import Lottie from 'react-lottie';
import ThemeContext from '../../context/Style';
import AudioLottie from '../../components/AudioLottie/AudioLottie';

const AudioPopup = () => {
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
        text="Continue"
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
        text="Continue with sound"
        isReversed={true}
      >
        <BsArrowRight size={64} />
      </IconButton>
    </AudioContainer>
  );
};

export default AudioPopup;

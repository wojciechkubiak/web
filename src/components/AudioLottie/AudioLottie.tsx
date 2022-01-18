import SoundData from '../../assets/lotties/sound.json';
import Lottie from 'react-lottie';
import { useContext } from 'react';
import SoundContext from '../../context/Sound';
import CrossingLine from '../CrossingLine/CrossingLine';
import { Container } from './AudioLottieStyle';

interface IAudioLottie {
  width?: number;
  height?: number;
  isInteractive?: boolean;
}

const AudioLottie = ({
  width = 78,
  height = 78,
  isInteractive = false,
}: IAudioLottie) => {
  const soundCtx = useContext(SoundContext);

  const animationOptions = {
    loop: true,
    autoplay: !isInteractive || soundCtx.isAudio,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    animationData: SoundData,
  };

  const handleClick = () => {
    if (isInteractive) {
      soundCtx.setIsAudio(!soundCtx.isAudio);
    }
    console.log(soundCtx.isAudio);
  };

  return (
    <Container style={{ position: 'relative' }} onClick={handleClick}>
      <Lottie
        isClickToPauseDisabled={!isInteractive}
        options={animationOptions}
        height={width}
        width={height}
        isStopped={false}
        isPaused={!soundCtx.isAudio}
      />
      {!soundCtx.isAudio && isInteractive && <CrossingLine />}
    </Container>
  );
};

export default AudioLottie;

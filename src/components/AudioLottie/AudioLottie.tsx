import SoundData from '../../assets/lotties/sound.json';
// import Lottie from 'react-lottie';
import lottie from 'lottie-web';
import { useContext, useEffect, useRef, useState } from 'react';
import SoundContext from '../../context/Sound';
import CrossingLine from '../CrossingLine/CrossingLine';
import { Container, Lottie } from './AudioLottieStyle';

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
  let lottieRef = useRef(
    null,
  ) as React.MutableRefObject<HTMLDivElement | null>;
  const [opacity, setOpacity] = useState<number>(
    soundCtx.isAudio || !isInteractive ? 1 : 0.6,
  );

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: SoundData,
      });
    }
  }, []);

  const handleClick = () => {
    soundCtx.setIsAudio(!soundCtx.isAudio);
    setOpacity(soundCtx.isAudio ? 0.6 : 1);
  };

  return (
    <Container style={{ position: 'relative' }} onClick={handleClick}>
      <Lottie size={width} opacity={opacity} ref={lottieRef} />
      {!soundCtx.isAudio && isInteractive && <CrossingLine />}
    </Container>
  );
};

export default AudioLottie;

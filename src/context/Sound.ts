import { createContext } from "react";

const SoundContext = createContext({
  isAudioWindow: true,
  setIsAudioWindow: (value: boolean) => {},
  isAudio: false,
  setIsAudio: (value: boolean) => {},
});

export default SoundContext;

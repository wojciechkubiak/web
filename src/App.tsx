import React, { useEffect, useRef, useState } from 'react';
import { useWidth } from './hooks/useSize';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import PageContext from './context/Page';
import TransformContext from './context/Transform';
import ThemeContext from './context/Style';

import { Theme } from './types/Themes';
import { Page } from './types/Pages';

import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import Contact from './containers/Contact/Contact';
import SoundContext from './context/Sound';
import AudioPopup from './containers/AudioPopup/AudioPopup';

import AudioFile from './assets/audio/spring_in_my_step.mp3';
import HideShowSwitch from './components/HideShowSwitch/HideShowSwitch';

import './App.css';

const App = (props: any) => {
  const { t, i18n } = props;
  const [lang, setLang] = useState<string>('pl');

  const [transform, setTransform] = useState<number>(0);
  const [page, setPage] = useState<Page>(Page.HOME);
  const [themeMode, setThemeMode] = useState<Theme>(Theme.LIGHT);
  const [isAudioWindow, setIsAudioWindow] = useState<boolean>(true);
  const [isAudio, setIsAudio] = useState<boolean>(false);
  const [showSwitches, setShowSwitches] = useState<boolean>(false);

  const width = useWidth();

  const audioRef = useRef(new Audio(AudioFile));

  const handleLanguage = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  const handleTransform = (value: number) => {
    setTransform(value);
  };

  const handlePage = (value: Page) => {
    setPage(value);
  };

  const handleThemeMode = (value: Theme) => {
    setThemeMode(value);
  };

  const handleAudioWindow = (value: boolean) => {
    setIsAudioWindow(value);
  };

  const handleAudio = (value: boolean) => {
    setIsAudio(value);
  };

  useEffect(() => {
    const isInit: boolean = localStorage.getItem('isInit') === null;
    if (!isInit) handleAudioWindow(false);
  }, []);

  useEffect(() => {
    console.log('isaudio', isAudio);
    if (isAudio) {
      audioRef.current.loop = true;
      if (audioRef.current !== undefined) {
        console.log('yo');
        audioRef.current
          .play()
          .then(function () {
            console.log('playing');
          })
          .catch(function (error: any) {
            console.error(error);
          });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isAudio]);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wojciech Kubiak - Flutter / Frontend Developer</title>
        <link rel="canonical" href="https://wojciechkubiak.com" />
        <meta
          name="description"
          content="You're looking for a flutter or web developer? Check out my website and other social medias that can be found inside."
        />
      </Helmet>
      <ThemeContext.Provider
        value={{
          themeMode: themeMode,
          setThemeMode: handleThemeMode,
        }}
      >
        <PageContext.Provider
          value={{
            language: lang,
            setLanguage: handleLanguage,
            currentPage: page,
            setCurrentPage: handlePage,
          }}
        >
          <SoundContext.Provider
            value={{
              isAudioWindow: isAudioWindow,
              setIsAudioWindow: handleAudioWindow,
              isAudio: isAudio,
              setIsAudio: handleAudio,
            }}
          >
            <TransformContext.Provider
              value={{
                transform: transform,
                setTransform: handleTransform,
              }}
            >
              <div className="App">
                <Layout>
                  <MainPage t={t} />
                  <Projects t={t} />
                  <Skills t={t} />
                  <Contact t={t} />
                </Layout>
                {(showSwitches || width > 920) && (
                  <>
                    <ThemeSwitch />
                    <LanguageSwitch />
                  </>
                )}
                {width <= 920 && (
                  <HideShowSwitch
                    onClick={() => setShowSwitches(!showSwitches)}
                    isOn={showSwitches}
                  />
                )}
                {isAudioWindow && <AudioPopup t={t} />}
              </div>
            </TransformContext.Provider>
          </SoundContext.Provider>
        </PageContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
};

export default withTranslation('common')(App);

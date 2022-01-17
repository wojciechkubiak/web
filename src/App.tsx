import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

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

import './App.css';
import Contact from './containers/Contact/Contact';

const App = (props: any) => {
  const { t, i18n } = props;
  const [lang, setLang] = useState<string>('en');

  const [transform, setTransform] = useState<number>(0);
  const [page, setPage] = useState<Page>(Page.HOME);
  const [themeMode, setThemeMode] = useState<Theme>(Theme.LIGHT);

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

  return (
    <main>
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
          <TransformContext.Provider
            value={{
              transform: transform,
              setTransform: handleTransform,
            }}
          >
            <Layout>
              <MainPage t={t} />
              <Projects t={t} />
              <Skills t={t} />
              <Contact t={t} />
            </Layout>
            <ThemeSwitch />
            <LanguageSwitch />
          </TransformContext.Provider>
        </PageContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
};

export default withTranslation('common')(App);

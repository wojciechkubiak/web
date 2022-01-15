import React, { useState } from "react";

import PageContext from "./context/Page";
import TransformContext from "./context/Transform";

import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";

import { Page } from "./types/Pages";
import "./App.css";
import ThemeContext from "./context/Style";
import { Theme } from "./types/Themes";
import Projects from "./containers/Projects/Projects";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

const App = () => {
  const [transform, setTransform] = useState<number>(0);
  const [page, setPage] = useState<Page>(Page.HOME);
  const [themeMode, setThemeMode] = useState<Theme>(Theme.LIGHT);

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
              <MainPage />
              <Projects />
            </Layout>
            <ThemeSwitch />
          </TransformContext.Provider>
        </PageContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
};

export default App;

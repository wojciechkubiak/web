import { createContext } from 'react';

import { Page } from '../types/Pages';

const PageContext = createContext({
  language: 'en',
  setLanguage: (value: string) => {},
  currentPage: Page.HOME,
  setCurrentPage: (value: Page) => {},
});

export default PageContext;

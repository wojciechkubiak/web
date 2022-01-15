import { createContext } from "react";
import { Page } from "../types/Pages";

const PageContext = createContext({
  currentPage: Page.HOME,
  setCurrentPage: (value: Page) => {},
});

export default PageContext;

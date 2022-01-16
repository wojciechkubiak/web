import { Theme } from "../../types/Themes";
import { LanguageOption, LanguageSwitchContainer } from "./LanguageSwitchStyle";
import { useContext, useState } from "react";
import ThemeContext from "../../context/Style";
import PageContext from "../../context/Page";

const languages = ["en", "pl"];

const LanguageSwitch = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const themeCtx = useContext(ThemeContext);
  const pageCtx = useContext(PageContext);

  return (
    <LanguageSwitchContainer
      page={pageCtx.currentPage}
      isActive={themeCtx.themeMode === Theme.DARK}
    >
      <LanguageOption
        theme={themeCtx.themeMode}
        isActive={true}
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>{pageCtx.language.toUpperCase()}</p>
      </LanguageOption>
      {showOptions && (
        <LanguageOption
          theme={themeCtx.themeMode}
          isActive={false}
          onClick={() => {
            pageCtx.setLanguage(
              pageCtx.language.toUpperCase() === "EN" ? "pl" : "en"
            );
            setShowOptions(false);
          }}
        >
          <p>{pageCtx.language.toUpperCase() === "EN" ? "PL" : "EN"}</p>
        </LanguageOption>
      )}
    </LanguageSwitchContainer>
  );
};

export default LanguageSwitch;

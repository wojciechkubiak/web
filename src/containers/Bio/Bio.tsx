import { BioPage, BioContent, BioButtons, Strong } from "./BioStyles";
import IconButton from "../../components/IconButton/IconButton";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ReactNode, useContext } from "react";
import PageContext from "../../context/Page";
import ThemeContext from "../../context/Style";

const colors: Array<String> = ["#7ca5cd", "#adb757", "#d088ad", "#964c79"];

interface IBio {
  t: any;
}

const Bio = ({ t }: IBio) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 4);
  };

  const getStrongText = (text: String): ReactNode => {
    const rand = getRandomNumber();

    return <Strong background={colors[rand]}>{text}</Strong>;
  };

  return (
    <BioPage currentPage={pageCtx.currentPage}>
      <BioContent theme={themeCtx.themeMode}>
        <h1>{t("pages.about", { framework: "react-i18next" })}</h1>
        <p>
          {t("bio.part1", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold1", { framework: "react-i18next" }))}
          {t("bio.part2", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold2", { framework: "react-i18next" }))}
          {t("bio.part3", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold3", { framework: "react-i18next" }))}
          {t("bio.part4", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold4", { framework: "react-i18next" }))}
          {t("bio.part5", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold5", { framework: "react-i18next" }))}
          {t("bio.part6", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold6", { framework: "react-i18next" }))}
          {t("bio.part7", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold7", { framework: "react-i18next" }))}
          {t("bio.part8", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold8", { framework: "react-i18next" }))}
          {t("bio.part9", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold9", { framework: "react-i18next" }))}
          {t("bio.part10", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold10", { framework: "react-i18next" }))}
          {t("bio.part11", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold11", { framework: "react-i18next" }))}
          {t("bio.part12", { framework: "react-i18next" })}
          {getStrongText(t("bio.bold12", { framework: "react-i18next" }))}
          {t("bio.part13", { framework: "react-i18next" })}
        </p>
        <BioButtons>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.HOME)}
            text={t("global.back", { framework: "react-i18next" })}
          >
            <BsArrowLeft size={64} />
          </IconButton>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.PROJECTS)}
            text={t("pages.projects", { framework: "react-i18next" })}
            isReversed={true}
          >
            <BsArrowRight size={64} />
          </IconButton>
        </BioButtons>
      </BioContent>
    </BioPage>
  );
};

export default Bio;

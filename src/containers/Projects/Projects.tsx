import { useContext, useEffect, useState } from "react";
import { ButtonsContainer, Container, Header } from "./ProjectsStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import IconButton from "../../components/IconButton/IconButton";
import ThemeContext from "../../context/Style";

interface IProjects {
  t: any;
}

const Projects = ({ t }: IProjects) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [transform, setTransform] = useState<number>(150);

  useEffect(() => {
    if (
      pageCtx.currentPage === Page.ABOUT ||
      pageCtx.currentPage === Page.HOME
    ) {
      setTransform(100);
    } else if (pageCtx.currentPage === Page.PROJECTS) {
      setTransform(0);
    } else {
      setTransform(-100);
    }
  }, [pageCtx]);

  return (
    <Container transform={transform}>
      <Header theme={themeCtx.themeMode}>
        {t("pages.projects", { framework: "react-i18next" })}
      </Header>
      <ButtonsContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.ABOUT)}
          text={t("global.back", { framework: "react-i18next" })}
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.SKILLS)}
          text={t("pages.skills", { framework: "react-i18next" })}
          isReversed={true}
        >
          <BsArrowRight size={64} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Projects;

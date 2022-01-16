import { useContext, useEffect, useState } from "react";
import { Container, Header, ButtonsContainer } from "./ProjectsStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import IconButton from "../../components/IconButton/IconButton";
import ThemeContext from "../../context/Style";

const Projects = () => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [transform, setTransform] = useState<number>(150);

  useEffect(() => {
    if (pageCtx.currentPage === Page.ABOUT) {
      setTransform(75);
    }
    if (pageCtx.currentPage === Page.PROJECTS) {
      setTransform(0);
    }
  }, [pageCtx]);

  return (
    <Container transform={transform}>
      <Header theme={themeCtx.themeMode}>Projects</Header>
      <ButtonsContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.ABOUT)}
          text="Back"
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.CONTACT)}
          text="Skills"
          isReversed={true}
        >
          <BsArrowRight size={64} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Projects;

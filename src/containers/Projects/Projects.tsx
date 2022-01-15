import { useContext, useEffect, useState } from "react";
import { Container } from "./ProjectsStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import IconButton from "../../components/IconButton/IconButton";

const Projects = () => {
  const pageCtx = useContext(PageContext);

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
      <h1>Projects</h1>
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
    </Container>
  );
};

export default Projects;

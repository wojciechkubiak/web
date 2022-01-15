import { useContext, useEffect, useState } from "react";
import { Container } from "./ProjectsStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";

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
      <h1>Test</h1>
    </Container>
  );
};

export default Projects;

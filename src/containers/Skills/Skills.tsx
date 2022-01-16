import { useContext, useEffect, useState } from "react";
import { ButtonsContainer, Container, Header } from "./SkillsStyle";
import PageContext from "../../context/Page";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import IconButton from "../../components/IconButton/IconButton";
import ThemeContext from "../../context/Style";

interface ISkills {
  t: any;
}

const Skills = ({ t }: ISkills) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [transform, setTransform] = useState<number>(150);

  useEffect(() => {
    if (
      pageCtx.currentPage === Page.ABOUT ||
      pageCtx.currentPage === Page.HOME ||
      pageCtx.currentPage === Page.PROJECTS
    ) {
      setTransform(100);
    } else if (pageCtx.currentPage === Page.SKILLS) {
      setTransform(0);
    } else {
      setTransform(-100);
    }
  }, [pageCtx]);

  return (
    <Container transform={transform}>
      <Header theme={themeCtx.themeMode}>Skills</Header>
      <ButtonsContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.PROJECTS)}
          text="Back"
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.CONTACT)}
          text="Contact"
          isReversed={true}
        >
          <BsArrowRight size={64} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Skills;

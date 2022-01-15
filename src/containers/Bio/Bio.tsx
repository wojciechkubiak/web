import { BioPage, BioContent, BioButtons } from "./BioStyles";
import IconButton from "../../components/IconButton/IconButton";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import PageContext from "../../context/Page";
import ThemeContext from "../../context/Style";

const Bio = () => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  return (
    <BioPage currentPage={pageCtx.currentPage}>
      <BioContent theme={themeCtx.themeMode}>
        <h1>About</h1>
        <p>
          In my career I had opportunity to create <strong>web</strong> and{" "}
          <strong>mobile applications</strong>, both <strong>client</strong> and{" "}
          <strong>server side</strong>. Ok, but how it all started? I used to
          draw a lot in my childhood - and I am doing that until now. Later, in
          high school I was <strong>creating building designs</strong>. There
          was always that one particle inside of me which makes me enjoy{" "}
          <strong>creating things</strong>. After high school fate wanted me to
          start study programming. Of course the first thing that caught my eye
          was <strong>web</strong> and <strong>mobile development</strong>. From
          that first weeks - even days - all I'm doing is thinking about what
          fancy application I could do, that would be nice looking and
          functional. Currently I accept various types of orders, I am working
          full time job as a programmer -{" "}
          <strong>Mobile / Frontend Developer</strong>, which allows me to earn
          a living while doing something I feel strong with, what makes my eyes
          shine. If you want to hire me or give me an assignment, so I can share
          my passion with you, <strong>fill in the form</strong> at the end of
          the website or just go into one of my social medias and{" "}
          <strong>message me</strong>.
        </p>
        <BioButtons>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.HOME)}
            text="Back"
          >
            <BsArrowLeft size={64} />
          </IconButton>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.PROJECTS)}
            text="Projects"
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

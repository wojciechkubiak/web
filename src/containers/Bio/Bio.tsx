import { BioPage, BioContent, BioButtons, Strong } from "./BioStyles";
import IconButton from "../../components/IconButton/IconButton";
import { Page } from "../../types/Pages";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ReactNode, useContext } from "react";
import PageContext from "../../context/Page";
import ThemeContext from "../../context/Style";

const colors: Array<String> = ["#7ca5cd", "#adb757", "#d088ad", "#964c79"];

const Bio = () => {
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
        <h1>About</h1>
        <p>
          In my career I had opportunity to create {getStrongText("web")} and{" "}
          {getStrongText("mobile applications")}, both {getStrongText("client")}{" "}
          and {getStrongText("server side")}. Ok, but how it all started? I used
          to draw a lot in my childhood - and I am doing that until now. Later,
          in high school I was {getStrongText("creating building designs")}.
          There was always that one particle inside of me which makes me enjoy{" "}
          {getStrongText("creating things")}. After high school fate wanted me
          to start study programming. Of course the first thing that caught my
          eye was {getStrongText("web")} and{" "}
          {getStrongText("mobile development")}. From that first weeks - even
          days - all I'm doing is thinking about what fancy application I could
          do, that would be nice looking and functional. Currently{" "}
          {getStrongText("I accept\n" + "          various types of orders")} ,
          I am working full time job as a programmer -{" "}
          {getStrongText("Mobile / Frontend Developer")}, which allows me to
          earn a living while doing something I feel strong with, what makes my
          eyes shine. If you want to hire me or give me an assignment, so I can
          share my passion with you, {getStrongText("fill in the form")} at the
          end of the website or just go into one of my social medias and{" "}
          {getStrongText("message me")}.
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

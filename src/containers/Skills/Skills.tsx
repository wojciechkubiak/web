import { useContext, useEffect, useState } from 'react';
import {
  ButtonsContainer,
  Container,
  Header,
  SkillsBody,
  SkillsContainer,
} from './SkillsStyle';
import SkillCard from '../../components/SkillCard/SkillCard';
import PageContext from '../../context/Page';
import { Page } from '../../types/Pages';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import IconButton from '../../components/IconButton/IconButton';
import ThemeContext from '../../context/Style';

// import FlutterImg from '../../assets/images/flutter.png';
// import ReactImg from '../../assets/images/react.png';
// import JavascriptImg from '../../assets/images/javascript.png';
// import TypescriptImg from '../../assets/images/typescript.png';
// import NodejsImg from '../../assets/images/node.png';
// import HtmlImg from '../../assets/images/html.png';
// import CssImg from '../../assets/images/css.png';
// import PythonImg from '../../assets/images/python.png';
// import SqlImg from '../../assets/images/sql.png';

// import WebImg from '../../assets/images/web.png';
// import MobileImg from '../../assets/images/mobile.png';
// import CloudImg from '../../assets/images/cloud.png';
// import { SkillsArray, SkillsKey } from '../../types/Skills';

// const skillsImages: SkillsArray = {
//   flutter: FlutterImg,
//   react: ReactImg,
//   javascript: JavascriptImg,
//   typescript: TypescriptImg,
//   nodejs: NodejsImg,
//   html: HtmlImg,
//   css: CssImg,
//   python: PythonImg,
//   sql: SqlImg,
// };

// const orderImages = {
//   web: WebImg,
//   mobile: MobileImg,
//   'backend/db': CloudImg,
// };

interface ISkills {
  t: any;
}

const Skills = ({ t }: ISkills) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [transform, setTransform] = useState<number>(150);
  const [order, setOrder] = useState<Array<any>>([]);
  const [hire, setHire] = useState<Array<any>>([]);

  useEffect(() => {
    setOrder(
      t('skills', {
        returnObjects: true,
        framework: 'react-i18next',
      }),
    );

    setHire(
      t('offers', {
        returnObjects: true,
        framework: 'react-i18next',
      }),
    );
  }, [t]);

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
      <SkillsBody theme={themeCtx.themeMode}>
        <Header theme={themeCtx.themeMode}>
          {t('skills_headers.order', { framework: 'react-i18next' })}
        </Header>
        <SkillsContainer theme={themeCtx.themeMode}>
          {order.map((element) => (
            <SkillCard
              text={element.name}
              description={element.description}
            />
          ))}
        </SkillsContainer>
        <Header theme={themeCtx.themeMode}>
          {t('skills_headers.hire', { framework: 'react-i18next' })}
        </Header>
        <SkillsContainer theme={themeCtx.themeMode}>
          {hire.map((element) => (
            <SkillCard
              text={element.name}
              description={element.description}
            />
          ))}
        </SkillsContainer>
      </SkillsBody>
      <ButtonsContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.PROJECTS)}
          text={t('global.back', { framework: 'react-i18next' })}
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.CONTACT)}
          text={t('pages.contact', { framework: 'react-i18next' })}
          isReversed={true}
        >
          <BsArrowRight size={64} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Skills;
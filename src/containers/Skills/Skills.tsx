import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import PageContext from '../../context/Page';
import ThemeContext from '../../context/Style';

import { Page } from '../../types/Pages';

import {
  ButtonsContainer,
  Container,
  Header,
  SkillsBody,
  SkillsContainer,
} from './SkillsStyle';
import SkillCard from '../../components/SkillCard/SkillCard';
import IconButton from '../../components/IconButton/IconButton';

interface ISkills {
  t: any;
}

const Skills = ({ t }: ISkills) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [transform, setTransform] = useState<number>(150);
  const [order, setOrder] = useState<Array<any>>([]);
  const [hire, setHire] = useState<Array<any>>([]);

  const ICON_SIZE = 64;

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
          {hire?.map((element) => (
            <SkillCard
              key={uuidv4()}
              text={element.name}
              description={element.description}
            />
          ))}
        </SkillsContainer>
        <Header theme={themeCtx.themeMode}>
          {t('skills_headers.hire', { framework: 'react-i18next' })}
        </Header>
        <SkillsContainer theme={themeCtx.themeMode}>
          {order?.map((element) => (
            <SkillCard
              key={uuidv4()}
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
          <BsArrowLeft size={ICON_SIZE} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.CONTACT)}
          text={t('pages.contact', { framework: 'react-i18next' })}
          isReversed={true}
        >
          <BsArrowRight size={ICON_SIZE} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Skills;

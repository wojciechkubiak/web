import { useContext, useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { useWidth } from '../../hooks/useSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import PageContext from '../../context/Page';
import ThemeContext from '../../context/Style';
import {
  ButtonsContainer,
  Container,
  Header,
  SwiperContainer,
  SwiperInfo,
  ButtonNav,
} from './ProjectsStyle';
import { Page } from '../../types/Pages';
import { ProjectsArray, ProjectKey } from '../../types/Projects';
import IconButton from '../../components/IconButton/IconButton';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Meditate from '../../assets/images/1m.png';
import Energe from '../../assets/images/1w.png';
import FitTracker from '../../assets/images/2m.png';
import ObbSys from '../../assets/images/2w.png';
import Acare from '../../assets/images/3m.png';
import Opqn from '../../assets/images/3w.png';
import CopySearcher from '../../assets/images/4w.png';
import AcareWeb from '../../assets/images/5w.png';
import POTG from '../../assets/images/6w.png';
import LazyNFit from '../../assets/images/4m.png';

import 'swiper/css';
import 'swiper/css/bundle';

interface IProjects {
  t: any;
}

const projectImages: ProjectsArray = {
  Meditate: {
    img: Meditate,
    isMobile: true,
  },
  Energe: {
    img: Energe,
    isMobile: false,
  },
  FitTracker: {
    img: FitTracker,
    isMobile: true,
  },
  ObbSys: {
    img: ObbSys,
    isMobile: false,
  },
  Acare: {
    img: Acare,
    isMobile: true,
  },
  Opqn: {
    img: Opqn,
    isMobile: false,
  },
  CopySearcher: {
    img: CopySearcher,
    isMobile: false,
  },
  AcareWeb: {
    img: AcareWeb,
    isMobile: false,
  },
  POTG: {
    img: POTG,
    isMobile: false,
  },
  LazyNFit: {
    img: LazyNFit,
    isMobile: true,
  },
};

export type Link = {
  img: (props: IconBaseProps) => JSX.Element;
  url: string;
};

export interface IProjectCard {
  header: string;
  img: string;
  description: string;
  isMobile: boolean;
  links?: Link[];
}

const Projects = ({ t }: IProjects) => {
  const width = useWidth() || 0;

  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  const [projects, setProjects] = useState<Array<any>>([]);
  const [swipe, setSwipe] = useState<any>();
  const [transform, setTransform] = useState<number>(150);

  useEffect(() => {
    setProjects(
      t('projects', {
        returnObjects: true,
        framework: 'react-i18next',
      }),
    );
  }, [t]);

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
        {t('pages.projects', { framework: 'react-i18next' })}
      </Header>
      <SwiperContainer>
        <Swiper
          slidesPerView={width > 1352 ? 2 : 1}
          loop={true}
          onBeforeInit={(swipper) => setSwipe(swipper)}
        >
          {projects?.map((value) => {
            const pKey: ProjectKey = value.name;

            const isMobile: boolean = projectImages[pKey]?.isMobile;
            const img: string = projectImages[pKey]?.img;

            return (
              <SwiperSlide key={uuidv4()}>
                <ProjectCard
                  key={uuidv4()}
                  header={value.name}
                  img={img}
                  description={value.description}
                  links={value.links}
                  isMobile={isMobile}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
      <SwiperInfo>
        {t('global.swipe', { framework: 'react-i18next' })}
      </SwiperInfo>
      <ButtonNav
        onClick={() => swipe?.slidePrev()}
        isLeft={true}
        theme={themeCtx.themeMode}
      >
        <MdKeyboardArrowLeft />
      </ButtonNav>
      <ButtonNav
        onClick={() => swipe?.slideNext()}
        isLeft={false}
        theme={themeCtx.themeMode}
      >
        <MdKeyboardArrowRight />
      </ButtonNav>
      <ButtonsContainer>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.ABOUT)}
          text={t('global.back', { framework: 'react-i18next' })}
        >
          <BsArrowLeft size={64} />
        </IconButton>
        <IconButton
          onClick={() => pageCtx.setCurrentPage(Page.SKILLS)}
          text={t('pages.skills', { framework: 'react-i18next' })}
          isReversed={true}
        >
          <BsArrowRight size={64} />
        </IconButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Projects;

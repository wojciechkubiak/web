import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LinkKey } from '../../types/Projects';
import ThemeContext from '../../context/Style';
import {
  ProjectsMobileCardContainer,
  CardMobileImage,
  ProjectsWebCardContainer,
  CardWebImage,
  Info,
} from './ProjectCardStyle';
import Badge from '../Badge/Badge';

export interface Link {
  type: LinkKey;
  link: string;
}

export interface IProjectCard {
  header: string;
  img: string;
  description: string;
  isMobile: boolean;
  links?: Link[];
}

const ProjectCard = ({
  header,
  img,
  description,
  links,
  isMobile,
}: IProjectCard) => {
  const themeCtx = useContext(ThemeContext);

  return isMobile ? (
    <>
      <ProjectsMobileCardContainer theme={themeCtx.themeMode}>
        <CardMobileImage
          src={img}
          alt={header}
          theme={themeCtx.themeMode}
        />
        <Info isMobile={true} theme={themeCtx.themeMode}>
          <h1>{header}</h1>
          <p>{description}</p>
          {links?.map((link: Link) => (
            <Badge key={uuidv4()} link={link} />
          ))}
        </Info>
      </ProjectsMobileCardContainer>
    </>
  ) : (
    <ProjectsWebCardContainer theme={themeCtx.themeMode}>
      <CardWebImage
        src={img}
        alt={header}
        theme={themeCtx.themeMode}
      />
      <Info isMobile={false} theme={themeCtx.themeMode}>
        <h1>{header}</h1>
        <p>{description}</p>
        {links?.map((link: Link) => (
          <Badge key={uuidv4()} link={link} />
        ))}
      </Info>
    </ProjectsWebCardContainer>
  );
};

export default ProjectCard;

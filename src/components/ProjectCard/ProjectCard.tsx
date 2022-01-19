import { useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { v4 as uuidv4 } from 'uuid';
import ThemeContext from '../../context/Style';
import {
  ProjectsMobileCardContainer,
  CardMobileImage,
  ProjectMobileLinks,
  ProjectsWebCardContainer,
  ProjectWebLinks,
  CardWebImage,
  Info,
} from './ProjectCardStyle';

export type Link = {
  img: (props: IconBaseProps) => JSX.Element;
  url: string;
};

export interface IProjectCard {
  header: string;
  img: string;
  description: string;
  links: Link[] | undefined;
  isMobile: boolean;
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
          {links?.map((element: Link) => {
            return (
              <a key={uuidv4()} href={element.url}>
                <element.img size={42} color="white" />
              </a>
            );
          })}
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
        {links?.map((element: Link) => {
          return (
            <a key={uuidv4()} href={element.url}>
              <element.img size={42} color="white" />
            </a>
          );
        })}
      </Info>
    </ProjectsWebCardContainer>
  );
};

export default ProjectCard;

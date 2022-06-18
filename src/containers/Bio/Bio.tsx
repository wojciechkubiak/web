import { useContext } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import PageContext from '../../context/Page';
import ThemeContext from '../../context/Style';
import IconButton from '../../components/IconButton/IconButton';
import { BioPage, BioContent, BioButtons } from './BioStyles';
import { Page } from '../../types/Pages';
import BioDescription from './BioDescription';

interface IBio {
  t: any;
}

const Bio = ({ t }: IBio) => {
  const pageCtx = useContext(PageContext);
  const themeCtx = useContext(ThemeContext);

  return (
    <BioPage currentPage={pageCtx.currentPage}>
      <BioContent theme={themeCtx.themeMode}>
        <h1>{t('pages.about', { framework: 'react-i18next' })}</h1>
        <BioDescription t={t} />
        <BioButtons>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.HOME)}
            text={t('global.back', { framework: 'react-i18next' })}
          >
            <BsArrowLeft size={64} />
          </IconButton>
          <IconButton
            onClick={() => pageCtx.setCurrentPage(Page.PROJECTS)}
            text={t('pages.projects', { framework: 'react-i18next' })}
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

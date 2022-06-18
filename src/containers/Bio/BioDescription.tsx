import { ReactNode } from 'react';

import { Strong } from './BioStyles';

interface IBioDescription {
  t: any;
}

const CLOUDY_SKY = '#7ca5cd';
const GREEN_RIVER = '#adb757';
const CANDY_PINK = '#d088ad';

const BioDescription = ({ t }: IBioDescription) => {
  const getStrongText = (text: String, color: String): ReactNode => {
    return <Strong background={color}>{text}</Strong>;
  };

  return (
    <p>
      {t('bio.part1', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold1', { framework: 'react-i18next' }),
        CLOUDY_SKY,
      )}
      {t('bio.part2', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold2', { framework: 'react-i18next' }),
        GREEN_RIVER,
      )}
      {t('bio.part3', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold3', { framework: 'react-i18next' }),
        CLOUDY_SKY,
      )}
      {t('bio.part4', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold4', { framework: 'react-i18next' }),
        CANDY_PINK,
      )}
      {t('bio.part5', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold5', { framework: 'react-i18next' }),
        CLOUDY_SKY,
      )}
      {t('bio.part6', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold6', { framework: 'react-i18next' }),
        CANDY_PINK,
      )}
      {t('bio.part7', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold7', { framework: 'react-i18next' }),
        GREEN_RIVER,
      )}
      {t('bio.part8', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold8', { framework: 'react-i18next' }),
        CLOUDY_SKY,
      )}
      {t('bio.part9', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold9', { framework: 'react-i18next' }),
        CANDY_PINK,
      )}
      {t('bio.part10', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold10', { framework: 'react-i18next' }),
        CLOUDY_SKY,
      )}
      {t('bio.part11', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold11', { framework: 'react-i18next' }),
        CANDY_PINK,
      )}
      {t('bio.part12', { framework: 'react-i18next' })}
      {getStrongText(
        t('bio.bold12', { framework: 'react-i18next' }),
        GREEN_RIVER,
      )}
      {t('bio.part13', { framework: 'react-i18next' })}
    </p>
  );
};

export default BioDescription;

export type ProjectKey = 'Meditate' | 'Energe' | 'FitTracker' | 'ObbSys' | 'Acare' | 'Opqn' | 'CopySearcher' | 'AcareWeb' | 'POTG' | 'LazyNFit';

export type LinkKey = 'GooglePlay' | 'AppleStore' | 'Website' | 'Git';

export type ProjectsArray = {
  [s in ProjectKey]: {
    img: string,
    isMobile: boolean,
  };
};
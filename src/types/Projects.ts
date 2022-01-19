export type ProjectKey = 'Meditate' | 'Energe' | 'FitTracker' | 'ObbSys' | 'Acare' | 'Opqn' | 'CopySearcher' | 'AcareWeb' | 'POTG';

export type ProjectsArray = {
  [s in ProjectKey]: {
    img: string,
    isMobile: boolean,
  };
};
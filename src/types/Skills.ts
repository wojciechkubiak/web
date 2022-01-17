export type SkillsKey = 'flutter' | 'react' | 'javascript' | 'typescript' | 'nodejs' | 'html' | 'css' | 'python' | 'sql';

export type SkillsArray = {
  [s in SkillsKey]: string;
};
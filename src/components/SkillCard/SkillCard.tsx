import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ThemeContext from '../../context/Style';
import { firstLetterToUpperCase } from '../../func/parsers';

import { Card, CardBody } from './SkillCardStyle';

interface ISkillCard {
  text: string;
  description: Array<string>;
}

const SkillCard = ({ text, description }: ISkillCard) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Card theme={themeCtx.themeMode}>
      <CardBody theme={themeCtx.themeMode}>
        <h1>{firstLetterToUpperCase(text)}</h1>
        <div>
          {description?.map((d) => (
            <p key={uuidv4()}>{d}</p>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default SkillCard;

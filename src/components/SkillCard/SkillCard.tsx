import { useContext } from 'react';
import ThemeContext from '../../context/Style';
import { Card, CardBody } from './SkillCardStyle';
import { v4 as uuidv4 } from 'uuid';

interface ISkillCard {
  text: string;
  description: Array<string>;
}

const SkillCard = ({ text, description }: ISkillCard) => {
  const themeCtx = useContext(ThemeContext);

  const firstLetterToUpperCase = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

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

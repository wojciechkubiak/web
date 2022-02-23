import { Link } from '../ProjectCard/ProjectCard';

import { GrGooglePlay } from 'react-icons/gr';
import { BsDisplay, BsApple } from 'react-icons/bs';
import { FaGit } from 'react-icons/fa';
import { MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md';

interface IBadge {
  link: Link;
}

const Badge = ({ link }: IBadge) => {
  const getIcon = (key: string): JSX.Element => {
    switch (key) {
      case 'GooglePlay':
        return <GrGooglePlay size={42}/>;
      case 'AppleStore':
        return <BsApple size={42} />;
      case 'Website':
        return <BsDisplay size={42} />;
      case 'Git':
        return <FaGit size={42} />;
      default:
        return <MdOutlineNoEncryptionGmailerrorred size={42}/>;
    }
  };

  return <a href={link.link} rel="noreferrer" target="_blank">{getIcon(link.type)}</a>;
};

export default Badge;

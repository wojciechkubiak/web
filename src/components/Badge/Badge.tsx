import { GrGooglePlay } from 'react-icons/gr';
import { BsDisplay, BsApple } from 'react-icons/bs';
import { FaGit } from 'react-icons/fa';
import { MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md';

import { Link } from '../ProjectCard/ProjectCard';

interface IBadge {
  link: Link;
  size?: number;
}

const Badge = ({ link, size = 42 }: IBadge) => {
  const getIcon = (key: string): JSX.Element => {
    switch (key) {
      case 'GooglePlay':
        return <GrGooglePlay size={size} />;
      case 'AppleStore':
        return <BsApple size={size} />;
      case 'Website':
        return <BsDisplay size={size} />;
      case 'Git':
        return <FaGit size={size} />;
      default:
        return <MdOutlineNoEncryptionGmailerrorred size={size} />;
    }
  };

  return (
    <a href={link.link} rel="noreferrer" target="_blank">
      {getIcon(link.type)}
    </a>
  );
};

export default Badge;

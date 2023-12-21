// icon
// https://fontawesome.com/search?o=r&m=free

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

type Props = {
  icon: string;
};

const CustomIcon = ({ icon }: Props) => {
  const setIcon = (icon: string) => {
    switch (icon) {
      case 'js':
        return faJs;

      default:
        return faTriangleExclamation;
    }
  };

  return <FontAwesomeIcon icon={setIcon(icon)} className='c-icon' />;
};

export default CustomIcon;

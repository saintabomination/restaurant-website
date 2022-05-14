import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { IconName } from '@fortawesome/fontawesome-common-types';

library.add(fas);

type IconProps = {
  iconName: IconName;
};

const Icon = ({ iconName }: IconProps): JSX.Element =>
  (
    <div>
      <FontAwesomeIcon icon={['fas', iconName]} />
    </div>
  );

export default Icon;

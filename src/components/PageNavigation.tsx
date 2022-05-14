import { Link } from 'react-router-dom';
import { x } from '@xstyled/styled-components';

import ContentWrapper from './ContentWrapper';

const PageNavigation = (): JSX.Element =>
  (
    <x.nav
      display="flex"
      alignItems="center"
    >
      <ContentWrapper>
        <x.div
          display="flex"
          alignItems="center"
          w="100%"
        >
          <h2>Page Navigation</h2>
          <x.ul
            display="flex"
            ml="auto"
          >
            <li><Link to="/">Home</Link></li>
          </x.ul>
        </x.div>
      </ContentWrapper>
    </x.nav>
  );

export default PageNavigation;

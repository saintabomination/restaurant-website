import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { x } from '@xstyled/styled-components';

import ContentWrapper from './ContentWrapper';

const PageNavigation = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 0
        ? setIsSticky(true)
        : setIsSticky(false)
    }
    scrollHandler();
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <x.nav
      position="sticky"
      top={0}
      display="flex"
      alignItems="center"
      py={isSticky ? 6 : 10}
      bg={isSticky ? 'textColor' : 'pageBackground'}
      color={isSticky ? 'pageBackground' : 'textColor'}
      transition=".2s"
    >
      <ContentWrapper>
        <x.div
          display="flex"
          alignItems="center"
          px={10}
          w="100%"
        >
          <h2>Page Navigation</h2>
          <x.ul
            display="flex"
            ml="auto"
            gap={8}
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
          </x.ul>
        </x.div>
      </ContentWrapper>
    </x.nav>
  );
}

export default PageNavigation;

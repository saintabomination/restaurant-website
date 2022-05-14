import { x } from '@xstyled/styled-components';

import ContentWrapper from './ContentWrapper';

type HeaderProps = {
  centered?: boolean;
  children: React.ReactNode;
};

const Header = ({ centered, children }: HeaderProps): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      justifyContent={centered ? 'center' : 'unset'}
      alignItems={centered ? 'center' : 'unset'}
      py={24}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </x.div>
  );

export default Header;
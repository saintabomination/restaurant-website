import { x } from '@xstyled/styled-components';

import ContentWrapper from './ContentWrapper';

type HeaderProps = {
  centered?: boolean;
  backgroundImage?: string;
  darkenValue?: number;
  children: React.ReactNode;
};

const Header = ({ centered, backgroundImage, darkenValue, children }: HeaderProps): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      justifyContent={centered ? 'center' : 'unset'}
      alignItems={centered ? 'center' : 'unset'}
      py={24}
      background={backgroundImage ? `linear-gradient(to bottom, rgba(0, 0, 0, ${darkenValue}), rgba(0, 0, 0, ${darkenValue})), url(${backgroundImage})` : 'unset'}
      backgroundSize="cover"
      backgroundPosition="center"
      color="pageBackground"
      textAlign={centered ? 'center' : 'inherit'}
    >
      <ContentWrapper>
        <x.div
          display="flex"
          flexDirection="column"
          justifyContent={centered ? 'center' : 'unset'}
          alignItems={centered ? 'center' : 'unset'}
          mx={centered ? 'auto' : 'unset'}
          w="max-content"
        >
          {children}
        </x.div>
      </ContentWrapper>
    </x.div>
  );

export default Header;

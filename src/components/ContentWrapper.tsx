import { x } from '@xstyled/styled-components';

type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps): JSX.Element =>
  (
    <x.div
      mx="auto"
      w="100%"
      maxW="contentWidth"
    >
      {children}
    </x.div>
  );

export default ContentWrapper;

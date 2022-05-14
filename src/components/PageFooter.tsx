import { x } from '@xstyled/styled-components';

import ContentWrapper from './ContentWrapper';

const PageFooter = (): JSX.Element =>
  (
    <x.footer
      mt="auto"
    >
      <ContentWrapper>
        <hr />
        <h3>Page Footer</h3>
      </ContentWrapper>
    </x.footer>
  );

export default PageFooter;

import { x } from '@xstyled/styled-components';

import DefaultLayout from '../layouts/DefaultLayout';
import Header from '../components/Header';
import Button from '../components/Button';
import ContentWrapper from '../components/ContentWrapper';
import Icon from '../components/Icon';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <Header centered>
        <h1>Home Page</h1>
        <p>Adipisicing asperiores deserunt omnis id aspernatur sed</p>
        <x.div
          display="flex"
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </x.div>
      </Header>
      <ContentWrapper>
        <Icon iconName="paper-plane" />
        <Icon iconName="paper-plane" />
        <Icon iconName="paper-plane" />
      </ContentWrapper>
    </DefaultLayout>
  );

export default HomePage;

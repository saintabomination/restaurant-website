import { x } from '@xstyled/styled-components';

import DefaultLayout from '../layouts/DefaultLayout';
import Header from '../components/Header';
import Button from '../components/Button';
import ContentWrapper from '../components/ContentWrapper';
import Icon from '../components/Icon';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <Header
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        darkenValue={0.7}
        centered
      >
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

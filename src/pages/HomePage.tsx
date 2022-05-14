import DefaultLayout from '../layouts/DefaultLayout';
import Header from '../components/Header';
import ContentWrapper from '../components/ContentWrapper';
import Icon from '../components/Icon';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <Header>
        <h1>Home Page</h1>
      </Header>
      <ContentWrapper>
        <Icon iconName="paper-plane" />
        <Icon iconName="paper-plane" />
        <Icon iconName="paper-plane" />
      </ContentWrapper>
    </DefaultLayout>
  );

export default HomePage;

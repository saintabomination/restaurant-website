import DefaultLayout from '../layouts/DefaultLayout';
import Header from '../components/Header';

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <Header>
        <h1>Home Page</h1>
      </Header>
    </DefaultLayout>
  );

export default HomePage;

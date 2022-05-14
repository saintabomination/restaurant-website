import PageNavigation from '../components/PageNavigation';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
    </>
  );

export default DefaultLayout;

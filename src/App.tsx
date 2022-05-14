import { Routes, Route } from 'react-router-dom';
import { x } from '@xstyled/styled-components';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const App = (): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      minH="200vh"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </x.div>
  );

export default App;

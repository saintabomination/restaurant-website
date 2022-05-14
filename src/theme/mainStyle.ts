import { createGlobalStyle } from '@xstyled/styled-components';

const MainStyle = createGlobalStyle`
  :root {
    font-size: 9px;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 10px;
    }
  }

  body {
    font-size: 1.3rem;
    font-family: 'Lato', sans-serif;
  }
`;

export default MainStyle;

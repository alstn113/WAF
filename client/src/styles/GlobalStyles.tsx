import { Global, css } from '@emotion/react';
import reset from '../../src/styles/reset';
const GlobalStyles = () => {
  return (
    <>
      <Global styles={reset} />
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          input {
            outline: none;
            border: none;
          }
          button {
            border: none;
            outline: none;
            background: none;
            cursor: pointer;
          }
          a {
            text-decoration: none;
          }
          @font-face {
            font-family: 'BMEULJIRO';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff')
              format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;

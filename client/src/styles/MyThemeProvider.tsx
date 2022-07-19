import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import theme from '../../src/styles/theme';

interface Props {
  children: React.ReactNode;
}

const MyThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;

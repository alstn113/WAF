import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from '@src/styles/theme';

interface Props {
  children: React.ReactNode;
}

const MyThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;

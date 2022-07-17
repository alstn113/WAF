import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: string;
      black: string;
      gray0: string;
      gray1: string;
      gray2: string;
      orange0: string;
      orange1: string;
      orange2: string;
    };
    font: {
      sm: css;
      md: css;
      lg: css;
    };
    borderRadius: {
      sm: css;
      md: css;
      lg: css;
    };
    media: {
      custom: (maxWidth: number) => string;
      labtop: string;
      mobile: string;
    };
  }
}

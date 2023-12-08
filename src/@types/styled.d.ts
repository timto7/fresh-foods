import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      divider: string;
      primary: string;
      surface: string;
      text: {
        inverted: string;
        main: string;
        soft: string;
        solid: string;
      };
    };
    radii: {
      button: string;
      surface: string;
    };
    shadows: {
      surface: string;
    };
  }
}

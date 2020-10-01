import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primaryLight: string;
      primary: string;
      secondary: string;
      white: string;
      screen: string;
      button: string;
    }
  }
}
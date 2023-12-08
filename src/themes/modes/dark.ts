import { DefaultTheme } from 'styled-components';

import common from './common';

const dark: DefaultTheme = {
  ...common,
  colors: {
    background: '#0c1425',
    primary: '#2dd4bf',
    surface: '#0f172a',
    text: {
      inverted: '#000000',
      main: '#ffffff',
      soft: '#90949e',
      solid: '#ffffff',
    },
  },
};

export default dark;

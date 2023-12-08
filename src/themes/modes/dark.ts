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
  shadows: {
    card: `0px 0.6px 0.6px rgba(0, 0, 0, 0.06),
    0px 1.3px 1.3px rgba(0, 0, 0, 0.043),
    0px 2.5px 2.5px rgba(0, 0, 0, 0.036),
    0px 4.5px 4.5px rgba(0, 0, 0, 0.03),
    0px 8.4px 8.4px rgba(0, 0, 0, 0.024),
    0px 20px 20px rgba(0, 0, 0, 0.017)`,
  },
};

export default dark;

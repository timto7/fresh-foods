import { DefaultTheme } from 'styled-components';

import common from './common';

const light: DefaultTheme = {
  ...common,
  colors: {
    background: '#f9f9f9',
    primary: '#00a96e',
    surface: '#ffffff',
    text: {
      inverted: '#ffffff',
      main: '#061c3d',
      soft: '#626973',
      solid: '#000000',
    },
  },
  shadows: {
    card: `0px 0px 1px rgba(0, 0, 0, 0.3),
    0px 0.6px 0.6px rgba(0, 0, 0, 0.06),
    0px 1.3px 1.3px rgba(0, 0, 0, 0.043),
    0px 2.5px 2.5px rgba(0, 0, 0, 0.036),
    0px 4.5px 4.5px rgba(0, 0, 0, 0.03),
    0px 8.4px 8.4px rgba(0, 0, 0, 0.024),
    0px 20px 20px rgba(0, 0, 0, 0.017)`,
  },
};

export default light;

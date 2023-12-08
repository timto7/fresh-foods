import { DefaultTheme } from 'styled-components';

import common from './common';

const light: DefaultTheme = {
  ...common,
  colors: {
    background: '#f2f2f2',
    primary: '#00a96e',
    surface: '#ffffff',
    text: {
      inverted: '#ffffff',
      main: '#061c3d',
      soft: '#626973',
      solid: '#000000',
    },
  },
};

export default light;

import { useContext } from 'react';

import { ThemeContext } from '../themes/ThemeContext';

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('Theme Context was used outside its provider');

  return context;
};

export default useThemeContext;

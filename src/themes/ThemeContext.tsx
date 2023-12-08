import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { dark, light } from './modes';

const LOCAL_STORAGE_KEY = 'theme-current-mode';

interface ThemeContextType {
  currentMode: 'light' | 'dark';
  currentTheme: object;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>(
    localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  );

  const toggleMode = useCallback(() => {
    const newMode = currentMode === 'dark' ? 'light' : 'dark';

    localStorage.setItem(LOCAL_STORAGE_KEY, newMode);

    setCurrentMode(newMode);
  }, [currentMode]);

  const currentTheme = useMemo(
    () => (currentMode === 'light' ? light : dark),
    [currentMode]
  );

  return (
    <ThemeContext.Provider value={{ currentMode, currentTheme, toggleMode }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

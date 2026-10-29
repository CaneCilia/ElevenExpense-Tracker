import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';
import { typography } from './typography';
import { spacing, radius } from './spacing';
import { createShadows } from './shadows';
import { Theme, ColorMode, ResolvedColorMode } from './types';

interface ThemeContextValue {
  theme: Theme;
  mode: ColorMode;
  resolvedMode: ResolvedColorMode;
  isDark: boolean;
  setMode: (mode: ColorMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ColorMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = 'system',
}) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ColorMode>(initialMode);

  const resolvedMode: ResolvedColorMode = useMemo(() => {
    if (mode === 'system') {
      return systemColorScheme === 'dark' ? 'dark' : 'light';
    }
    return mode;
  }, [mode, systemColorScheme]);

  const isDark = resolvedMode === 'dark';

  const theme: Theme = useMemo(() => {
    const colors = isDark ? darkColors : lightColors;
    const shadows = createShadows(isDark);

    return {
      isDark,
      colors,
      typography,
      spacing,
      radius,
      shadows,
    };
  }, [isDark]);

  const toggleMode = () => {
    setMode((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  const value = useMemo(
    () => ({
      theme,
      mode,
      resolvedMode,
      isDark,
      setMode,
      toggleMode,
    }),
    [theme, mode, resolvedMode, isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

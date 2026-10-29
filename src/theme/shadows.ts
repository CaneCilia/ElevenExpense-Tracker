import { Platform } from 'react-native';
import { ShadowTokens } from './types';

export const createShadows = (isDark: boolean): ShadowTokens => {
  const shadowColor = isDark ? '#000000' : '#0F172A';

  return {
    none: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDark ? 0.35 : 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: isDark ? 0.45 : 0.08,
      shadowRadius: 6,
      elevation: 3,
    },
    lg: {
      shadowColor,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: isDark ? 0.55 : 0.12,
      shadowRadius: 12,
      elevation: 6,
    },
  };
};

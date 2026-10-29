import { TextStyle, ViewStyle } from 'react-native';

export type ColorMode = 'light' | 'dark' | 'system';
export type ResolvedColorMode = 'light' | 'dark';

export interface ColorTokens {
  // Backgrounds & Surfaces
  background: string;
  surface: string;
  surfaceElevated: string;
  surfaceSubtle: string;

  // Borders
  border: string;
  borderSubtle: string;
  borderFocus: string;

  // Text Colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  // Brand Accent
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primarySubtle: string;

  // Financial Semantics
  income: string;
  incomeLight: string;
  incomeDark: string;
  incomeSubtle: string;

  expense: string;
  expenseLight: string;
  expenseDark: string;
  expenseSubtle: string;

  transfer: string;
  transferLight: string;
  transferDark: string;
  transferSubtle: string;

  // Status & Feedback
  success: string;
  successSubtle: string;
  warning: string;
  warningSubtle: string;
  danger: string;
  dangerSubtle: string;
  info: string;
  infoSubtle: string;

  // Overlay
  overlay: string;
  skeleton: string;

  // Category Palette
  categories: {
    food: string;
    shopping: string;
    housing: string;
    transportation: string;
    entertainment: string;
    health: string;
    salary: string;
    investments: string;
    utilities: string;
    education: string;
    personal: string;
    other: string;
  };
}

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body'
  | 'bodyMedium'
  | 'callout'
  | 'caption'
  | 'captionMedium'
  | 'tiny'
  | 'amountLarge'
  | 'amountMedium'
  | 'amountSmall';

export interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  fontWeight: TextStyle['fontWeight'];
  letterSpacing?: number;
  fontFamily?: string;
  fontVariant?: TextStyle['fontVariant'];
}

export type TypographyTokens = Record<TypographyVariant, TypographyStyle>;

export interface SpacingTokens {
  none: 0;
  '2xs': 2;
  xs: 4;
  sm: 8;
  md: 12;
  lg: 16;
  xl: 20;
  '2xl': 24;
  '3xl': 32;
  '4xl': 40;
  '5xl': 48;
  '6xl': 64;
}

export interface RadiusTokens {
  none: 0;
  xs: 4;
  sm: 8;
  md: 12;
  lg: 16;
  xl: 24;
  '2xl': 32;
  full: 9999;
}

export interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowTokens {
  none: ShadowStyle;
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
}

export interface Theme {
  isDark: boolean;
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
}

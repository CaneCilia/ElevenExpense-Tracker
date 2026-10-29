import { Platform } from 'react-native';
import { TypographyTokens } from './types';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

const fontMono = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: 'monospace',
});

export const typography: TypographyTokens = {
  display: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -0.5,
    fontFamily,
  },
  h1: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.3,
    fontFamily,
  },
  h2: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: -0.2,
    fontFamily,
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: -0.1,
    fontFamily,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
    fontFamily,
  },
  bodyMedium: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily,
  },
  callout: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily,
  },
  captionMedium: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    fontFamily,
  },
  tiny: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
    fontFamily,
  },
  amountLarge: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.2,
    fontFamily,
    fontVariant: ['tabular-nums'],
  },
  amountMedium: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
    fontFamily,
    fontVariant: ['tabular-nums'],
  },
  amountSmall: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily,
    fontVariant: ['tabular-nums'],
  },
};

export { fontMono, fontFamily };

import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/theme';
import { TypographyVariant } from '@/theme/types';

export type TextSemanticColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'inverse'
  | 'income'
  | 'expense'
  | 'transfer'
  | 'warning'
  | 'danger'
  | 'brand';

export interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
  color?: TextSemanticColor | string;
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  tabular?: boolean;
  style?: TextStyle | (TextStyle | undefined | null | false)[];
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  weight,
  align,
  tabular = false,
  style,
  children,
  ...rest
}) => {
  const { theme } = useTheme();
  const typoStyle = theme.typography[variant] || theme.typography.body;

  const resolveColor = (c: TextSemanticColor | string): string => {
    switch (c) {
      case 'primary':
        return theme.colors.textPrimary;
      case 'secondary':
        return theme.colors.textSecondary;
      case 'muted':
        return theme.colors.textMuted;
      case 'inverse':
        return theme.colors.textInverse;
      case 'income':
        return theme.colors.income;
      case 'expense':
        return theme.colors.expense;
      case 'transfer':
        return theme.colors.transfer;
      case 'warning':
        return theme.colors.warning;
      case 'danger':
        return theme.colors.danger;
      case 'brand':
        return theme.colors.primary;
      default:
        return c;
    }
  };

  const computedStyle: TextStyle = {
    fontSize: typoStyle.fontSize,
    lineHeight: typoStyle.lineHeight,
    fontWeight: weight || typoStyle.fontWeight,
    letterSpacing: typoStyle.letterSpacing,
    fontFamily: typoStyle.fontFamily,
    color: resolveColor(color),
    textAlign: align,
    ...(tabular || typoStyle.fontVariant?.includes('tabular-nums')
      ? { fontVariant: ['tabular-nums'] }
      : {}),
  };

  return (
    <RNText style={[computedStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import { SpacingTokens } from '@/theme/types';

export interface SpacerProps {
  y?: keyof SpacingTokens | number;
  x?: keyof SpacingTokens | number;
  flex?: number;
  style?: ViewStyle;
}

export const Spacer: React.FC<SpacerProps> = ({ y, x, flex, style }) => {
  const { theme } = useTheme();

  const resolveValue = (val?: keyof SpacingTokens | number): number | undefined => {
    if (val === undefined) return undefined;
    if (typeof val === 'number') return val;
    return theme.spacing[val];
  };

  const height = resolveValue(y);
  const width = resolveValue(x);

  return (
    <View
      style={[
        {
          height,
          width,
          flex,
        },
        style,
      ]}
    />
  );
};

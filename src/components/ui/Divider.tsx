import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  spacing?: number;
  color?: string;
  subtle?: boolean;
  style?: ViewStyle;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = StyleSheet.hairlineWidth || 1,
  spacing: customSpacing = 0,
  color,
  subtle = false,
  style,
}) => {
  const { theme } = useTheme();

  const dividerColor =
    color || (subtle ? theme.colors.borderSubtle : theme.colors.border);

  const isHorizontal = orientation === 'horizontal';

  const dividerStyle: ViewStyle = isHorizontal
    ? {
        height: thickness,
        width: '100%',
        backgroundColor: dividerColor,
        marginVertical: customSpacing,
      }
    : {
        width: thickness,
        height: '100%',
        backgroundColor: dividerColor,
        marginHorizontal: customSpacing,
      };

  return <View style={[dividerStyle, style]} />;
};

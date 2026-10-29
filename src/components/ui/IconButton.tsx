import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/theme';

export type IconButtonVariant = 'default' | 'filled' | 'tinted' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  rounded?: boolean;
  style?: ViewStyle | (ViewStyle | undefined | null | false)[];
  accessibilityLabel: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  rounded = true,
  disabled = false,
  style,
  accessibilityLabel,
  onPress,
  ...rest
}) => {
  const { theme } = useTheme();

  const getDimension = (): number => {
    switch (size) {
      case 'sm':
        return 32;
      case 'lg':
        return 48;
      case 'md':
      default:
        return 40;
    }
  };

  const dim = getDimension();

  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case 'filled':
        return {
          backgroundColor: theme.colors.surfaceElevated,
          ...theme.shadows.sm,
        };
      case 'tinted':
        return {
          backgroundColor: theme.colors.primarySubtle,
        };
      case 'outline':
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      case 'default':
      default:
        return {
          backgroundColor: 'transparent',
        };
    }
  };

  const buttonStyle: ViewStyle = {
    width: dim,
    height: dim,
    borderRadius: rounded ? dim / 2 : theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    ...getVariantStyle(),
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={[buttonStyle, style]}
      {...rest}
    >
      {icon}
    </TouchableOpacity>
  );
};

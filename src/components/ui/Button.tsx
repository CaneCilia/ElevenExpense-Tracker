import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/theme';
import { Text } from './Text';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'income';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  style?: ViewStyle | (ViewStyle | undefined | null | false)[];
  textStyle?: TextStyle | (TextStyle | undefined | null | false)[];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  style,
  textStyle,
  onPress,
  ...rest
}) => {
  const { theme } = useTheme();
  const isDisabled = disabled || loading;

  const getContainerStyle = (): ViewStyle => {
    // Size sizing
    let height = 48;
    let paddingHorizontal = theme.spacing.lg;
    let borderRadius = theme.radius.md;

    if (size === 'sm') {
      height = 36;
      paddingHorizontal = theme.spacing.md;
      borderRadius = theme.radius.sm;
    } else if (size === 'lg') {
      height = 54;
      paddingHorizontal = theme.spacing.xl;
      borderRadius = theme.radius.lg;
    }

    // Colors & borders by variant
    let backgroundColor = theme.colors.primary;
    let borderColor = 'transparent';
    let borderWidth = 0;

    switch (variant) {
      case 'primary':
        backgroundColor = theme.colors.primary;
        break;
      case 'secondary':
        backgroundColor = theme.colors.surfaceSubtle;
        break;
      case 'outline':
        backgroundColor = 'transparent';
        borderColor = theme.colors.border;
        borderWidth = 1.5;
        break;
      case 'ghost':
        backgroundColor = 'transparent';
        break;
      case 'danger':
        backgroundColor = theme.colors.danger;
        break;
      case 'income':
        backgroundColor = theme.colors.income;
        break;
    }

    return {
      height,
      paddingHorizontal,
      borderRadius,
      backgroundColor,
      borderColor,
      borderWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      opacity: isDisabled ? 0.5 : 1,
    };
  };

  const getTextColor = (): string => {
    switch (variant) {
      case 'primary':
      case 'danger':
      case 'income':
        return '#FFFFFF';
      case 'secondary':
        return theme.colors.textPrimary;
      case 'outline':
        return theme.colors.textPrimary;
      case 'ghost':
        return theme.colors.primary;
      default:
        return theme.colors.textPrimary;
    }
  };

  const getFontSizeVariant = (): 'captionMedium' | 'bodyMedium' | 'subtitle' => {
    if (size === 'sm') return 'captionMedium';
    if (size === 'lg') return 'subtitle';
    return 'bodyMedium';
  };

  const textColor = getTextColor();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      activeOpacity={0.75}
      disabled={isDisabled}
      onPress={onPress}
      style={[getContainerStyle(), style]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <View style={styles.contentRow}>
          {leadingIcon ? <View style={styles.leadingIcon}>{leadingIcon}</View> : null}
          <Text
            variant={getFontSizeVariant()}
            weight="600"
            color={textColor}
            style={textStyle}
          >
            {title}
          </Text>
          {trailingIcon ? <View style={styles.trailingIcon}>{trailingIcon}</View> : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leadingIcon: {
    marginRight: 8,
  },
  trailingIcon: {
    marginLeft: 8,
  },
});

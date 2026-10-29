import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/theme';
import { Text } from './Text';

export type BadgeVariant =
  | 'income'
  | 'expense'
  | 'transfer'
  | 'warning'
  | 'neutral'
  | 'primary';

export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dotColor?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle | (ViewStyle | undefined | null | false)[];
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'neutral',
  size = 'md',
  icon,
  dotColor,
  selected = false,
  onPress,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const getColors = (): { bg: string; text: string; border: string } => {
    switch (variant) {
      case 'income':
        return {
          bg: theme.colors.incomeSubtle,
          text: theme.colors.income,
          border: theme.colors.income,
        };
      case 'expense':
        return {
          bg: theme.colors.expenseSubtle,
          text: theme.colors.expense,
          border: theme.colors.expense,
        };
      case 'transfer':
        return {
          bg: theme.colors.transferSubtle,
          text: theme.colors.transfer,
          border: theme.colors.transfer,
        };
      case 'warning':
        return {
          bg: theme.colors.warningSubtle,
          text: theme.colors.warning,
          border: theme.colors.warning,
        };
      case 'primary':
        return {
          bg: theme.colors.primarySubtle,
          text: theme.colors.primary,
          border: theme.colors.primary,
        };
      case 'neutral':
      default:
        return {
          bg: theme.colors.surfaceSubtle,
          text: theme.colors.textSecondary,
          border: theme.colors.border,
        };
    }
  };

  const colors = getColors();
  const isSm = size === 'sm';

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: isSm ? theme.spacing.xs + 2 : theme.spacing.sm + 2,
    paddingVertical: isSm ? 2 : 4,
    borderRadius: theme.radius.full,
    backgroundColor: selected ? colors.text : colors.bg,
    borderWidth: 1,
    borderColor: selected ? colors.text : 'transparent',
    alignSelf: 'flex-start',
  };

  const badgeContent = (
    <>
      {dotColor ? (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: dotColor,
              width: isSm ? 6 : 8,
              height: isSm ? 6 : 8,
              borderRadius: 4,
              marginRight: isSm ? 4 : 6,
            },
          ]}
        />
      ) : null}

      {icon ? (
        <View style={{ marginRight: isSm ? 3 : 5 }}>{icon}</View>
      ) : null}

      <Text
        variant={isSm ? 'tiny' : 'captionMedium'}
        weight="600"
        color={selected ? theme.colors.textInverse : colors.text}
        style={textStyle}
      >
        {label}
      </Text>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[containerStyle, style]}
      >
        {badgeContent}
      </TouchableOpacity>
    );
  }

  return <View style={[containerStyle, style]}>{badgeContent}</View>;
};

const styles = StyleSheet.create({
  dot: {
    alignSelf: 'center',
  },
});

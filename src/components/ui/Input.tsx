import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/theme';
import { Text } from './Text';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  helperText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leadingIcon,
  trailingIcon,
  clearable = false,
  onClear,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  placeholderTextColor,
  onFocus,
  onBlur,
  ...rest
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const hasError = Boolean(error);

  const getBorderColor = (): string => {
    if (hasError) return theme.colors.danger;
    if (isFocused) return theme.colors.borderFocus;
    return theme.colors.border;
  };

  const handleClear = () => {
    if (onChangeText) {
      onChangeText('');
    }
    if (onClear) {
      onClear();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text variant="captionMedium" color="secondary" style={styles.label}>
          {label}
        </Text>
      ) : null}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.surface,
            borderColor: getBorderColor(),
            borderRadius: theme.radius.md,
          },
        ]}
      >
        {leadingIcon ? <View style={styles.leadingContainer}>{leadingIcon}</View> : null}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor ?? theme.colors.textMuted}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          style={[
            styles.input,
            {
              color: theme.colors.textPrimary,
              fontSize: theme.typography.body.fontSize,
            },
            inputStyle,
          ]}
          {...rest}
        />

        {clearable && value ? (
          <TouchableOpacity
            onPress={handleClear}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.clearButton}
          >
            <Text variant="caption" color="muted">
              ✕
            </Text>
          </TouchableOpacity>
        ) : null}

        {trailingIcon ? (
          <View style={styles.trailingContainer}>{trailingIcon}</View>
        ) : null}
      </View>

      {hasError ? (
        <Text variant="caption" color="danger" style={styles.feedbackText}>
          {error}
        </Text>
      ) : helperText ? (
        <Text variant="caption" color="muted" style={styles.feedbackText}>
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  leadingContainer: {
    marginRight: 8,
  },
  trailingContainer: {
    marginLeft: 8,
  },
  clearButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  feedbackText: {
    marginTop: 4,
    marginLeft: 2,
  },
});

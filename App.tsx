import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from '@/theme';
import {
  Text,
  Button,
  Card,
  Input,
  Badge,
  IconButton,
  Divider,
  Spacer,
  Screen,
} from '@/components/ui';

function DesignTokensShowcase() {
  const { theme, isDark, mode, setMode } = useTheme();
  const [inputText, setInputText] = useState('₹ 1,250.00');
  const [selectedBadge, setSelectedBadge] = useState<string>('expense');

  return (
    <Screen scrollable padding="md">
      <Spacer y="sm" />

      {/* Header & Theme Switcher */}
      <View style={styles.headerRow}>
        <View>
          <Text variant="h1" weight="700">
            Design Tokens
          </Text>
          <Text variant="callout" color="secondary">
            Base UI primitives & color system
          </Text>
        </View>

        <Button
          variant="secondary"
          size="sm"
          title={isDark ? '🌙 Dark' : '☀️ Light'}
          onPress={() => setMode(isDark ? 'light' : 'dark')}
        />
      </View>

      <Spacer y="lg" />

      {/* Financial Net Balance Preview Card */}
      <Card variant="elevated" padding="lg">
        <Text variant="captionMedium" color="secondary">
          TOTAL NET BALANCE
        </Text>
        <Spacer y="xs" />
        <Text variant="display" weight="700" color="primary">
          ₹24,850.00
        </Text>

        <Spacer y="md" />
        <Divider subtle />
        <Spacer y="md" />

        <View style={styles.statsRow}>
          <View>
            <Text variant="caption" color="muted">
              Monthly Income
            </Text>
            <Text variant="amountMedium" color="income">
              +₹45,000.00
            </Text>
          </View>
          <Divider orientation="vertical" />
          <View>
            <Text variant="caption" color="muted">
              Monthly Expenses
            </Text>
            <Text variant="amountMedium" color="expense">
              -₹20,150.00
            </Text>
          </View>
        </View>
      </Card>

      <Spacer y="xl" />

      {/* Typography Scale */}
      <Text variant="h3">Typography Scale</Text>
      <Spacer y="sm" />
      <Card variant="outlined" padding="md">
        <Text variant="h1">H1 Heading (28pt)</Text>
        <Text variant="h2">H2 Heading (22pt)</Text>
        <Text variant="h3">H3 Heading (18pt)</Text>
        <Text variant="subtitle">Subtitle Medium (16pt)</Text>
        <Text variant="body">Body Regular for transactions and descriptions (15pt)</Text>
        <Text variant="callout" color="secondary">
          Callout text for secondary metadata (14pt)
        </Text>
        <Text variant="caption" color="muted">
          Caption label for timestamps and IDs (12pt)
        </Text>
        <Text variant="amountLarge" color="brand">
          ₹99,999.00 (Tabular Numbers)
        </Text>
      </Card>

      <Spacer y="xl" />

      {/* Badges / Chips */}
      <Text variant="h3">Badges & Category Chips</Text>
      <Spacer y="sm" />
      <View style={styles.badgeRow}>
        <Badge
          variant="income"
          label="Income"
          selected={selectedBadge === 'income'}
          onPress={() => setSelectedBadge('income')}
        />
        <Badge
          variant="expense"
          label="Expense"
          selected={selectedBadge === 'expense'}
          onPress={() => setSelectedBadge('expense')}
        />
        <Badge
          variant="transfer"
          label="Transfer"
          selected={selectedBadge === 'transfer'}
          onPress={() => setSelectedBadge('transfer')}
        />
        <Badge
          variant="warning"
          label="Budget 85%"
          selected={selectedBadge === 'warning'}
          onPress={() => setSelectedBadge('warning')}
        />
        <Badge
          variant="neutral"
          label="UPI"
          selected={selectedBadge === 'neutral'}
          onPress={() => setSelectedBadge('neutral')}
        />
      </View>

      <Spacer y="xl" />

      {/* Button Variants */}
      <Text variant="h3">Button Primitives</Text>
      <Spacer y="sm" />
      <View style={styles.buttonCol}>
        <Button title="Primary Action" variant="primary" fullWidth />
        <Spacer y="sm" />
        <Button title="Save Income (Semantic Green)" variant="income" fullWidth />
        <Spacer y="sm" />
        <Button title="Delete Record (Danger)" variant="danger" fullWidth />
        <Spacer y="sm" />
        <Button title="Secondary Action" variant="secondary" fullWidth />
        <Spacer y="sm" />
        <Button title="Outline Button" variant="outline" fullWidth />
      </View>

      <Spacer y="xl" />

      {/* Form Inputs */}
      <Text variant="h3">Input Fields</Text>
      <Spacer y="sm" />
      <Input
        label="Amount"
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter amount"
        clearable
        helperText="Currency is stored in integer minor units (paise)"
      />

      <Input
        label="Category Note"
        placeholder="e.g. Grocery shopping at supermarket"
        helperText="Optional note for ledger search"
      />

      <Input
        label="Error State Demonstration"
        value="Invalid format"
        error="Please enter a valid monetary amount"
      />

      <Spacer y="3xl" />
    </Screen>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider initialMode="system">
        <DesignTokensShowcase />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  buttonCol: {
    width: '100%',
  },
});

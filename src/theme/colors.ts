import { ColorTokens } from './types';

export const lightColors: ColorTokens = {
  // Backgrounds & Surfaces
  background: '#F8FAFC',       // Slate 50
  surface: '#FFFFFF',          // Pure white
  surfaceElevated: '#FFFFFF',  // Elevated card
  surfaceSubtle: '#F1F5F9',    // Slate 100

  // Borders
  border: '#E2E8F0',           // Slate 200
  borderSubtle: '#F1F5F9',     // Slate 100
  borderFocus: '#6366F1',      // Indigo 500

  // Text Colors
  textPrimary: '#0F172A',      // Slate 900
  textSecondary: '#475569',    // Slate 600
  textMuted: '#94A3B8',        // Slate 400
  textInverse: '#FFFFFF',      // White

  // Brand Accent (Indigo)
  primary: '#4F46E5',          // Indigo 600
  primaryLight: '#6366F1',     // Indigo 500
  primaryDark: '#4338CA',      // Indigo 700
  primarySubtle: '#EEF2FF',    // Indigo 50

  // Financial Semantics
  // Income (Emerald)
  income: '#10B981',           // Emerald 500
  incomeLight: '#34D399',      // Emerald 400
  incomeDark: '#059669',       // Emerald 600
  incomeSubtle: '#ECFDF5',     // Emerald 50

  // Expense (Rose)
  expense: '#EF4444',          // Rose 500
  expenseLight: '#F87171',     // Rose 400
  expenseDark: '#DC2626',      // Rose 600
  expenseSubtle: '#FEF2F2',    // Rose 50

  // Transfer (Sky / Blue)
  transfer: '#0284C7',         // Sky 600
  transferLight: '#38BDF8',    // Sky 400
  transferDark: '#0369A1',     // Sky 700
  transferSubtle: '#F0F9FF',   // Sky 50

  // Status & Feedback
  success: '#10B981',
  successSubtle: '#ECFDF5',
  warning: '#F59E0B',          // Amber 500
  warningSubtle: '#FFFBEB',    // Amber 50
  danger: '#EF4444',
  dangerSubtle: '#FEF2F2',
  info: '#3B82F6',
  infoSubtle: '#EFF6FF',

  // Overlay
  overlay: 'rgba(15, 23, 42, 0.5)',
  skeleton: '#E2E8F0',

  // Category Palette
  categories: {
    food: '#F97316',           // Orange
    shopping: '#EC4899',       // Pink
    housing: '#8B5CF6',        // Violet
    transportation: '#06B6D4', // Cyan
    entertainment: '#F59E0B',  // Amber
    health: '#10B981',         // Emerald
    salary: '#14B8A6',         // Teal
    investments: '#3B82F6',    // Blue
    utilities: '#6366F1',      // Indigo
    education: '#A855F7',      // Purple
    personal: '#D946EF',       // Fuchsia
    other: '#64748B',          // Slate
  },
};

export const darkColors: ColorTokens = {
  // Backgrounds & Surfaces
  background: '#090D16',       // Deep midnight slate
  surface: '#131B2E',          // Card slate surface
  surfaceElevated: '#1E293B',  // Elevated slate surface
  surfaceSubtle: '#182238',    // Muted slate surface

  // Borders
  border: '#24324D',           // Slate border
  borderSubtle: '#182238',     // Subtler border
  borderFocus: '#818CF8',      // Indigo 400

  // Text Colors
  textPrimary: '#F8FAFC',      // Slate 50
  textSecondary: '#94A3B8',    // Slate 400
  textMuted: '#64748B',        // Slate 500
  textInverse: '#0F172A',      // Slate 900

  // Brand Accent (Indigo)
  primary: '#6366F1',          // Indigo 500
  primaryLight: '#818CF8',     // Indigo 400
  primaryDark: '#4F46E5',      // Indigo 600
  primarySubtle: '#1E1B4B',    // Indigo 950

  // Financial Semantics
  // Income (Emerald)
  income: '#34D399',           // Emerald 400
  incomeLight: '#6EE7B7',      // Emerald 300
  incomeDark: '#10B981',       // Emerald 500
  incomeSubtle: '#064E3B',     // Emerald 900

  // Expense (Rose)
  expense: '#F87171',          // Rose 400
  expenseLight: '#FCA5A5',     // Rose 300
  expenseDark: '#EF4444',      // Rose 500
  expenseSubtle: '#450A0A',    // Rose 950

  // Transfer (Sky / Blue)
  transfer: '#38BDF8',         // Sky 400
  transferLight: '#7DD3FC',    // Sky 300
  transferDark: '#0284C7',     // Sky 600
  transferSubtle: '#082F49',   // Sky 950

  // Status & Feedback
  success: '#34D399',
  successSubtle: '#064E3B',
  warning: '#FBBF24',
  warningSubtle: '#451A03',
  danger: '#F87171',
  dangerSubtle: '#450A0A',
  info: '#60A5FA',
  infoSubtle: '#172554',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  skeleton: '#1E293B',

  // Category Palette
  categories: {
    food: '#FB923C',
    shopping: '#F472B6',
    housing: '#A78BFA',
    transportation: '#22D3EE',
    entertainment: '#FCD34D',
    health: '#34D399',
    salary: '#2DD4BF',
    investments: '#60A5FA',
    utilities: '#818CF8',
    education: '#C084FC',
    personal: '#E879F9',
    other: '#94A3B8',
  },
};

export type TransactionType = 'expense' | 'income';

export interface Transaction {
  id: string;
  type: TransactionType;
  amountMinor: number; // Integer minor units (e.g. paise for INR: ₹10.50 = 1050)
  currencyCode: string; // Default: 'INR'
  categoryId: string;
  accountId: string;
  paymentMethodId: string;
  occurredAt: string; // ISO 8601 string
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export type AccountType = 'cash' | 'bank' | 'wallet' | 'credit';

export interface Account {
  id: string;
  name: string;
  accountType: AccountType;
  currencyCode: string;
  openingBalanceMinor: number;
  isArchived: boolean;
}

export interface Category {
  id: string;
  name: string;
  transactionType: 'expense' | 'income' | 'both';
  iconKey: string;
  colorKey: string;
  isDefault: boolean;
  isArchived: boolean;
}

export interface Budget {
  id: string;
  categoryId?: string; // Optional: null/undefined = overall monthly budget
  period: 'monthly';
  limitMinor: number;
  startDate: string;
  endDate: string;
}

export interface Transfer {
  id: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amountMinor: number;
  occurredAt: string;
  note?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'cash' | 'upi' | 'card' | 'bank_transfer' | 'other';
  isDefault: boolean;
}

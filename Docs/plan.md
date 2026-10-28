# Features Roadmap & Development Plan

Based on [Docs/overview.md](file:///D:/GitDesk/ExpenseTracker/Docs/overview.md) and [Docs/agenttask.md](file:///D:/GitDesk/ExpenseTracker/Docs/agenttask.md), this document defines the feature roadmap, data model, and detailed step-by-step phased execution plan for the Expense Tracker.

---

## 1. Features Roadmap

### Phase 1 — MVP (Current Scope)
- [ ] Add, edit, duplicate, and delete income and expenses
- [ ] Dashboard with net balance, today's spending, and monthly summary
- [ ] Transaction ledger with grouped dates, search, and category/account filters
- [ ] Built-in numeric keypad / calculator for fast entry
- [ ] Categories and payment methods management
- [ ] Monthly totals and category breakdown charts
- [ ] SQLite local persistence with WAL mode and versioned migrations
- [ ] INR (₹) default with configurable currency formatting
- [ ] CSV export and full JSON data backup / restore
- [ ] Light / Dark theme support and accessible UI

### Phase 2 — Personal Finance & Budgets
- [ ] Overall monthly and category-specific budgets with visual warning thresholds
- [ ] Recurring income and expense schedules
- [ ] Custom reporting periods and month-over-month comparisons
- [ ] Multiple accounts, wallets, and internal balance transfers
- [ ] Optional PIN or biometric app lock

### Phase 3 — Advanced & Cloud Sync
- [ ] Optional encrypted cloud backup and multi-device sync
- [ ] Multiple independent ledgers (e.g., Personal, Business, Travel)
- [ ] Shared expense splitting and settlements
- [ ] Receipt attachments and camera capture
- [ ] Smart categorization

---

## 2. Core Data Model

### Transaction
```typescript
interface Transaction {
  id: string;
  type: 'expense' | 'income';
  amountMinor: number; // Integer minor units (e.g. paise for INR: ₹10.50 = 1050)
  currencyCode: string; // Default: 'INR'
  categoryId: string;
  accountId: string;
  paymentMethodId: string;
  occurredAt: string; // ISO 8601 string in user's local timezone
  note?: string;
  createdAt: string;
  updatedAt: string;
}
```

### Account
```typescript
interface Account {
  id: string;
  name: string;
  accountType: 'cash' | 'bank' | 'wallet' | 'credit';
  currencyCode: string;
  openingBalanceMinor: number;
  isArchived: boolean;
}
```

### Category
```typescript
interface Category {
  id: string;
  name: string;
  transactionType: 'expense' | 'income' | 'both';
  iconKey: string;
  colorKey: string;
  isDefault: boolean;
  isArchived: boolean;
}
```

### Budget
```typescript
interface Budget {
  id: string;
  categoryId?: string; // Optional: null = overall monthly budget
  period: 'monthly';
  limitMinor: number;
  startDate: string;
  endDate: string;
}
```

### Transfer
```typescript
interface Transfer {
  id: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amountMinor: number;
  occurredAt: string;
  note?: string;
}
```

---

## 3. Phased Implementation Plan

### Phase 0: Project Setup & Architecture Foundations
- **Step 0.1**: Initialize Expo React Native TypeScript project, configure path aliases (`@/components`, `@/db`, `@/stores`, `@/utils`), ESLint, and Jest.
- **Step 0.2**: Implement design tokens (typography, spacing, light/dark color palette) and reusable base UI primitives.
- **Step 0.3**: Setup React Navigation structure (Bottom Tabs: Home, Ledger, Budgets, Reports, Settings; Native Stack for modal flows).
- **Step 0.4**: Implement SQLite database connection (`expo-sqlite`), versioned schema migration runner, and default seed data (accounts, categories, payment methods).
- **Step 0.5**: Implement financial calculation utilities (minor units conversion, net balance, closing balance, summary math) with unit tests.

### Phase 1: Core Transaction Flow & Add/Edit Experience
- **Step 1.1**: Build the built-in quick calculator component / keypad.
- **Step 1.2**: Implement the Add / Edit Transaction screen (type switch, amount input, category picker, account/payment method selector, date/time, note).
- **Step 1.3**: Build the SQLite transaction repository and reactive Zustand transaction store.
- **Step 1.4**: Unit tests verifying transaction creation, updates, and calculation accuracy.

### Phase 2: Dashboard & Ledger (Transactions View)
- **Step 2.1**: Implement Home Dashboard (Total balance card, income/expense summary, today's spending, quick add CTA, recent records).
- **Step 2.2**: Implement Transactions Ledger screen with grouped date sections and daily summary headers.
- **Step 2.3**: Build search and filter functionality (filter by category, account, type, and date range).
- **Step 2.4**: Implement Transaction Detail screen with duplicate transaction and delete with undo capability.

### Phase 3: Statistics & Visual Reports
- **Step 3.1**: Category spending breakdown (pie/donut chart and ranked percentage list).
- **Step 3.2**: Income vs. Expense monthly comparison charts.
- **Step 3.3**: Period filters (This Month, Last Month, Year, Custom range).

### Phase 4: Budgets & Spending Insights
- **Step 4.1**: Monthly overall budget setting and progress tracking bar.
- **Step 4.2**: Category-specific budgets with visual threshold alerts (<80% safe, 80-99% warning, 100%+ exceeded).

### Phase 5: Settings, Customization & Data Backup/Export
- **Step 5.1**: Category Manager (custom categories, icons, colors, archive).
- **Step 5.2**: Accounts & Payment Methods manager.
- **Step 5.3**: Full JSON data backup & restore, and CSV export.
- **Step 5.4**: Preferences (Currency selection, Light/Dark theme toggle).

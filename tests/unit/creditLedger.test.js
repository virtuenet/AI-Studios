import { describe, it, expect } from 'vitest';
import {
  createMemoryLedgerStore,
  CreditLedger,
  InsufficientCreditsError,
} from '../../packages/studio/src/client/creditLedger';

describe('CreditLedger', () => {
  it('tracks balance from credited amounts', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 100, 'subscription_credit', 'sub_march');
    await ledger.credit('org1', 50, 'credit_pack_purchase', 'pack_1');

    expect(await ledger.getBalance('org1')).toBe(150);
  });

  it('reserves credits and deducts from balance', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 100, 'subscription_credit', 'sub');
    await ledger.reserve('org1', 30, 'gen-1');

    expect(await ledger.getBalance('org1')).toBe(70);
  });

  it('throws InsufficientCreditsError when balance is too low', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 10, 'subscription_credit', 'sub');
    await expect(ledger.reserve('org1', 50, 'gen-1')).rejects.toThrow(
      InsufficientCreditsError,
    );
  });

  it('settles over-reserved credits with a refund entry', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 100, 'subscription_credit', 'sub');
    await ledger.reserve('org1', 50, 'gen-1');
    const result = await ledger.settle('org1', 50, 30, 'gen-1');

    expect(result.refund).not.toBeNull();
    expect(result.refund.delta).toBe(20);
    expect(await ledger.getBalance('org1')).toBe(70);
  });

  it('refunds a failed generation', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 100, 'subscription_credit', 'sub');
    await ledger.reserve('org1', 40, 'gen-1');
    await ledger.refund('org1', 40, 'gen-1');

    expect(await ledger.getBalance('org1')).toBe(100);
  });

  it('isolates balances between organizations', async () => {
    const store = createMemoryLedgerStore();
    const ledger = new CreditLedger(store);

    await ledger.credit('org1', 100, 'subscription_credit', 'sub');
    await ledger.credit('org2', 200, 'subscription_credit', 'sub');

    expect(await ledger.getBalance('org1')).toBe(100);
    expect(await ledger.getBalance('org2')).toBe(200);
  });
});

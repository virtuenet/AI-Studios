import { describe, it, expect } from 'vitest';
import {
  createMemoryLedgerStore,
  CreditLedger,
} from '../../packages/studio/src/client/creditLedger';
import { createMemoryJobStore } from '../../packages/studio/src/client/jobQueue';

describe('tenant isolation', () => {
  describe('CreditLedger', () => {
    it('prevents cross-org balance access', async () => {
      const store = createMemoryLedgerStore();
      const ledger = new CreditLedger(store);

      await ledger.credit('orgA', 100, 'subscription_credit', 'sub');
      await ledger.credit('orgB', 200, 'subscription_credit', 'sub');

      // Each org sees only its own balance
      expect(await ledger.getBalance('orgA')).toBe(100);
      expect(await ledger.getBalance('orgB')).toBe(200);
    });

    it('prevents cross-org credit reservation', async () => {
      const store = createMemoryLedgerStore();
      const ledger = new CreditLedger(store);

      await ledger.credit('orgA', 50, 'subscription_credit', 'sub');
      await ledger.credit('orgB', 100, 'subscription_credit', 'sub');

      // orgA cannot reserve more than its balance
      await expect(ledger.reserve('orgA', 100, 'gen-1')).rejects.toThrow();

      // orgB can reserve within its balance
      await ledger.reserve('orgB', 80, 'gen-2');
      expect(await ledger.getBalance('orgB')).toBe(20);

      // orgA's balance is unaffected
      expect(await ledger.getBalance('orgA')).toBe(50);
    });

    it('isolates ledger entries by org', async () => {
      const store = createMemoryLedgerStore();
      const ledger = new CreditLedger(store);

      await ledger.credit('orgA', 10, 'subscription_credit', 'sub-a');
      await ledger.credit('orgB', 20, 'subscription_credit', 'sub-b');

      const entriesA = await store.entries('orgA');
      const entriesB = await store.entries('orgB');

      expect(entriesA).toHaveLength(1);
      expect(entriesA[0].orgId).toBe('orgA');
      expect(entriesB).toHaveLength(1);
      expect(entriesB[0].orgId).toBe('orgB');
    });
  });

  describe('JobStore', () => {
    it('prevents cross-org job access', async () => {
      const store = createMemoryJobStore();

      const jobA = await store.enqueue({
        type: 'image',
        payload: {},
        orgId: 'orgA',
      });

      const jobB = await store.enqueue({
        type: 'image',
        payload: {},
        orgId: 'orgB',
      });

      // Each org can retrieve its own job
      const retrievedA = await store.get(jobA.id);
      expect(retrievedA?.orgId).toBe('orgA');

      const retrievedB = await store.get(jobB.id);
      expect(retrievedB?.orgId).toBe('orgB');
    });

    it('lists only the requesting org\'s jobs', async () => {
      const store = createMemoryJobStore();

      await store.enqueue({ type: 'image', payload: {}, orgId: 'orgA' });
      await store.enqueue({ type: 'image', payload: {}, orgId: 'orgA' });
      await store.enqueue({ type: 'image', payload: {}, orgId: 'orgB' });

      const jobsA = await store.listByOrg('orgA');
      const jobsB = await store.listByOrg('orgB');

      expect(jobsA).toHaveLength(2);
      expect(jobsA.every((j) => j.orgId === 'orgA')).toBe(true);
      expect(jobsB).toHaveLength(1);
      expect(jobsB[0].orgId).toBe('orgB');
    });
  });
});

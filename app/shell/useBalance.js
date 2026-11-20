"use client";

import { useSyncExternalStore } from 'react';

/**
 * External balance store — React Compiler friendly (no setState-in-effect).
 * The balance is polled from Muapi every 30 s in StandaloneShell and written
 * here so every child can read it with useBalance().
 */

let balanceValue = null;
const balanceListeners = new Set();

export function setBalance(next) {
  balanceValue = next;
  for (const listener of balanceListeners) listener();
}

function subscribeBalance(listener) {
  balanceListeners.add(listener);
  return () => balanceListeners.delete(listener);
}

function getBalanceSnapshot() {
  return balanceValue;
}

export function useBalance() {
  return useSyncExternalStore(subscribeBalance, getBalanceSnapshot, () => null);
}

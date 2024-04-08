import { tokensMap } from './eth-tokens';
import { EthToken } from './types';

export function getEthTokenAddresses(): string[] {
  return Object.keys(tokensMap);
}

export function getEthTokenByAddress(address: string): EthToken | undefined {
  return tokensMap[address];
}

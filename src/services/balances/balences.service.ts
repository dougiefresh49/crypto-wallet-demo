import { cache } from 'react';
import { Web3 } from 'web3';
import { getAddressBalances } from 'eth-balance-checker/lib/web3';
import { getEthTokenAddresses, getEthTokenByAddress } from '@/services/tokens';
import { EthTokenBalence } from './types';

export const getEthWalletBalance = cache(
  async (
    address: string,
    _web3?: Web3
  ): Promise<[EthTokenBalence[], boolean]> => {
    try {
      const web3 = _web3 ?? new Web3('https://eth.llamarpc.com');
      const tokenAddresses = [...getEthTokenAddresses()];

      const balances = await getAddressBalances(web3, address, tokenAddresses);
      const nonZeroBalances = Object.keys(balances)
        .filter((addr) => balances[addr] !== '0')
        .map((addr) => ({
          balance: web3.utils.fromWei(balances[addr], 'ether'),
          ...getEthTokenByAddress(addr),
        }));
      return [nonZeroBalances as EthTokenBalence[], false];
    } catch (e) {
      console.error(`[ERROR] error checking wallet balance: ${e}`);
      return [[], true];
    }
  }
);

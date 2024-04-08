import { EthTokenBase } from '@/services/tokens';

export interface EthTokenBalence extends EthTokenBase {
  balance: string;
}

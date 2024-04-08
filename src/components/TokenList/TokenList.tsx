import * as React from 'react';
import { SkeletonList } from '@/components/Loading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getEthWalletBalance } from '@/services/balances';

interface Props {
  walletAddress: string;
}

export function TokenList(props: Props) {
  /**
   * Data
   */
  const [tokenBalances, error] = React.use(
    getEthWalletBalance(props.walletAddress)
  );

  /**
   * Render
   */
  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="text-2xl font-bold">Token Balances</h2>
      <div className="flex flex-col w-full gap-3 border rounded-lg p-3 bg-popover text-card-foreground shadow-sm">
        <React.Suspense fallback={<SkeletonList numItems={8} />}>
          {error && (
            <div className="text-red-500">
              Something went wrong checking your wallet ballence, please try
              again.
            </div>
          )}
          {tokenBalances.map((token) => (
            <div
              key={token.address}
              className="flex justify-between gap-x-6 px-2 py-3"
            >
              <div className="flex gap-x-4">
                <Avatar>
                  <AvatarImage src={token.logo?.src} alt={token.symbol} />
                  <AvatarFallback>{token.symbol?.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="font-bold">{token.symbol}</div>
                  <div className="text-gray-500">{token.name}</div>
                </div>
              </div>
              <div className="flex items-center gap-x-4 overflow-hidden">
                <div className="text-gray-500 truncate ...">
                  {token.balance} ETH
                </div>
              </div>
            </div>
          ))}
        </React.Suspense>
      </div>
    </div>
  );
}
